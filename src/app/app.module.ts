import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LayoutModule } from '@angular/cdk/layout';
import { SwiperModule } from 'swiper/angular';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThemeComponent } from './header/theme/theme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';

// Shared service
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HeaderComponent,
    ThemeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    SwiperModule,
    LayoutModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
