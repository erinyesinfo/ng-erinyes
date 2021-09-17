import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { AboutRoutingModule } from './about-routing.module';
import { HomeComponent } from './home/home.component';
import { TalentComponent } from './home/talent/talent.component';

@NgModule({
  declarations: [
    HomeComponent,
    TalentComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
