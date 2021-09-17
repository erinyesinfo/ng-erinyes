import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { ProjectsRoutingModule } from './projects-routing.module';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './home/icons/icons.component';


@NgModule({
  declarations: [
    HomeComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
