import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './home/icons/icons.component';


@NgModule({
  declarations: [
    HomeComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
