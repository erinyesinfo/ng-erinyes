import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  Theme: string = (localStorage.getItem('theme') && localStorage.getItem('theme') === 'black') ? 'black':'';

  constructor(private sharedService: SharedService) {
    this.sharedService.sharedTheme.subscribe(theme => this.Theme = theme)
  };
  ngOnInit(): void {
    let body = document.querySelector("body")
    if (body) {
      body.style.background = 'url(https://i.imgur.com/CZdBKjO.gif) no-repeat center center fixed';
      body.style.backgroundSize = 'cover';
      body.style.backgroundColor = '#342643';
    }
  }
  ngOnDestroy(): void {
    let body = document.querySelector("body")
    if (body && this.Theme) {
      body.style.background = '';
      body.style.backgroundSize = '';
      if (body.style.backgroundColor !== 'rgb(0, 0, 0)' || body.style.color !== 'rgb(255, 255, 255)') {
        if (body.style.backgroundColor !== 'rgb(0, 0, 0)' && body.style.color !== 'rgb(255, 255, 255)') {
          body.style.backgroundColor = 'rgb(0, 0, 0)';
          body.style.color = 'rgb(255, 255, 255)';
        } else if (body.style.backgroundColor !== 'rgb(0, 0, 0)') {
          body.style.backgroundColor = 'rgb(0, 0, 0)';
        } else if (body.style.color !== 'rgb(255, 255, 255)') {
          body.style.color = 'rgb(255, 255, 255)';
        }
      }
    } else if (body && !this.Theme) {
      body.style.background = '';
      body.style.backgroundSize = '';
      body.style.backgroundColor = '';
    }
  }
}
