import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Mousewheel]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Theme: string = (localStorage.getItem('theme') && localStorage.getItem('theme') === 'black') ? 'black':'';
  
  mouseInAnimate: string = '';
  handleMouseIn = (value: string) => this.mouseInAnimate = value;

  images = {
    mikta: 'projects/Mikta.jpg',
    bubbly: 'projects/Bubbly.png',
    hoomer: 'projects/Hoomer.png',
    taski: 'projects/Taski.png'
  };
  
  constructor(private sharedService: SharedService) {
    this.sharedService.sharedTheme.subscribe(theme => this.Theme = theme)
  };
  ngOnInit(): void {}

  onSwiper(swiper:any) {}
  onSlideChange() {}
}
