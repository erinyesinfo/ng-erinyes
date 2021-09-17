import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  
  onSwiper(swiper:any) {}
  onSlideChange() {}
}