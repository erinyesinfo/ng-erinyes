import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  Theme: string = (localStorage.getItem('theme') && (localStorage.getItem('theme') === 'black')) ? 'black':'';
  toggleSwitch = document.querySelector(
    '.theme-switch-wrapper input[type="checkbox"]'
  );

  /*
   * This two functions will go up one level
   * back to (header.component.ts)
   * When we call (switchTheme --function) this two function will run
  */
  @Output() handleLightTheme_LocalStorage = new EventEmitter();
  @Output() handleDarkTheme_LocalStorage = new EventEmitter();
  handleLightTheme = () => {
    if (this.Theme === '') return null;
    this.Theme = '';
    let body = document.querySelector("body");
    if (body && (body.style.backgroundColor === 'rgb(0, 0, 0)' || body.style.color === 'rgb(255, 255, 255)')) {
      if (body.style.backgroundColor === 'rgb(0, 0, 0)' && body.style.color === 'rgb(255, 255, 255)') {
        body.style.backgroundColor = 'unset';
        body.style.color = 'unset';
      } else if (body.style.backgroundColor === 'rgb(0, 0, 0)') {
        body.style.backgroundColor = 'unset';
      } else if (body.style.color === 'rgb(255, 255, 255)') {
        body.style.color = 'unset';
      }
    }
    return this.handleLightTheme_LocalStorage.emit();
  };
  handleDarkTheme = () => {
    if (this.Theme.length > 0) return null;
    this.Theme = 'black';
    let body = document.querySelector("body");
    if (body && (body.style.backgroundColor !== 'rgb(0, 0, 0)' || body.style.color !== 'rgb(255, 255, 255)')) {
      if (body.style.backgroundColor !== 'rgb(0, 0, 0)' && body.style.color !== 'rgb(255, 255, 255)') {
        body.style.backgroundColor = 'rgb(0, 0, 0)';
        body.style.color = 'rgb(255, 255, 255)';
      } else if (body.style.backgroundColor !== 'rgb(0, 0, 0)') {
        body.style.backgroundColor = 'rgb(0, 0, 0)';
      } else if (body.style.color !== 'rgb(255, 255, 255)') {
        body.style.color = 'rgb(255, 255, 255)';
      }
    }
    return this.handleDarkTheme_LocalStorage.emit();
  };
  /* --End-- */
  
  constructor() {};
  ngOnInit(): void {};
  
  switchTheme(e: any) {
    let lightThemeText = document.getElementById("light-theme-text");
    let darkThemeText = document.getElementById("dark-theme-text");
    if (lightThemeText !== null) { lightThemeText.classList.toggle("disabled"); }
    if (darkThemeText !== null) { darkThemeText.classList.toggle("disabled"); }

    if (e.target.checked) { this.handleDarkTheme(); }
    else { this.handleLightTheme(); }
  };
}
