import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Theme: string = (localStorage.getItem('theme') && localStorage.getItem('theme') === 'black') ? 'black':'';
  mouseInAnimate: string = '';
  setMouseInAnimate = (value: string) => this.mouseInAnimate = value;

  constructor(private sharedService: SharedService) {
    this.sharedService.sharedTheme.subscribe(theme => this.Theme = theme)
  };
  ngOnInit(): void {}
}
