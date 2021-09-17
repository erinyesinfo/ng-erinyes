import { Component, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  Theme: string = (localStorage.getItem('theme') && localStorage.getItem('theme') === 'black') ? 'black':'';

  matches576: boolean = false;
  showMenu: boolean = false;
  handleShowMenu = () => this.showMenu = !this.showMenu;
  mouseEnter: boolean = false;

  handleShowTheme = () => {
    let elm = document.getElementById('header-theme');
    if (elm && elm.classList.contains('header-theme-close')) { elm.classList.remove('header-theme-close') }
    this.mouseEnter = true;
  };
  handleCloseTheme = () => {
    let elm = document.getElementById('header-theme');
    if (elm) { elm.classList.add('header-theme-close') }
    let timeOut: any = setTimeout(() => {
      if (elm && !elm.classList.contains('header-theme-close')) return clearTimeout(timeOut);
      this.mouseEnter = false;
      clearTimeout(timeOut);
    }, 200);
  };

  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(private sharedService: SharedService, breakpointObserver: BreakpointObserver) {
    this.sharedService.sharedTheme.subscribe(theme => this.Theme = theme)

    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(takeUntil(this.destroyed)).subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
        }
      }
    });
    breakpointObserver.observe([
      Breakpoints.XSmall,
    ]).subscribe(result => {      
      if (result.matches) {
        this.matches576 = true;
      } else { this.matches576 = false; }
    });
  }

  ngOnInit() {};
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  };

  /*
   * Pass this two function to (toggle-theme.component.html)
   * To alter Theme without refreshing the page
  */
  handleLightTheme_LocalStorage = () => {
    if (localStorage.getItem('theme')) {
      this.Theme = '';
      localStorage.removeItem('theme');
      return this.sharedService.handleUpdateTheme('')
    } return null;
  };
  handleDarkTheme_LocalStorage = () => {
    if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'black') return null;
    this.Theme = 'black';
    localStorage.setItem('theme', 'black');
    return this.sharedService.handleUpdateTheme('black');
  };
  /* --End-- */
}
