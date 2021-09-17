import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './home/icons/icons.component';


@NgModule({
  declarations: [
    HomeComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
