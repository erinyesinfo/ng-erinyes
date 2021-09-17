import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Theme: string = (localStorage.getItem('theme') && localStorage.getItem('theme') === 'black') ? 'black':'';

  constructor(private sharedService: SharedService) {
    this.sharedService.sharedTheme.subscribe(theme => this.Theme = theme)
  };
  ngOnInit() {
    if (this.Theme) {
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
    }
  };
}
