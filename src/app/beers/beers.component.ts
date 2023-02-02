import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
})
export class BeersComponent implements OnInit {
  public beers: Beer[] = [];
  public favoriteList: Array<number> = [];

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.beerService.getAll().subscribe((beers) => (this.beers = beers));
  }

  public getFavorites(item: number): void {
    // Get click items and store it in Array
    this.generateFavoriteList(item);
  }

  private generateFavoriteList(item: number): void {
    // Check if item.id exist. Add or Remove items
    if(!this.favoriteList.includes(item)){
      this.favoriteList.push(item);   
    } else {
      this.favoriteList.splice(this.favoriteList.indexOf(item), 1);
    }
    // Create localstorage
    this.setLocalStorage(this.favoriteList);
  }

  private setLocalStorage(list: Array<number>): void {
    const datas = JSON.stringify(list);
    localStorage.setItem('beers', datas);
  }

  // Not implemented, but can be usefull for retive a beer by id
  private getLocalStorage() {
    return localStorage.getItem('beers');
  }
}
