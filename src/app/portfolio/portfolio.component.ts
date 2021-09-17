import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  mouseInAnimate: string = '';
  setMouseInAnimate = (value: string) => this.mouseInAnimate = value;

  constructor() {}
  ngOnInit(): void {}
}
