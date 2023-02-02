import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerService } from './services/beer.service';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeersComponent } from './beers/beers.component';
import { BeerItemComponent } from './beers/beer-item/beer-item.component';

@NgModule({
  declarations: [AppComponent, BeerDetailComponent, BeersComponent, BeerItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BeerService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
