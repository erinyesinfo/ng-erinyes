import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mouseInAnimate: string = '';
  setMouseInAnimate = (value: string) => this.mouseInAnimate = value;

  constructor() {}
  ngOnInit(): void {}
}
