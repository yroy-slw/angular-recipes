import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerService } from './services/beer.service';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeersComponent } from './beers/beers.component';
import { BeerItemComponent } from './beers/beer-item/beer-item.component';
import { LoaderInterceptor } from './interceptor/loader.interceptor';

@NgModule({
  declarations: [AppComponent, BeerDetailComponent, BeersComponent, BeerItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [
    BeerService, HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ]
})
export class AppModule {}
