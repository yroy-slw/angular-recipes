import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Beer } from 'src/app/beer';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss'],
})
export class BeerItemComponent {
  @Input() beer: Beer;
  @Output() favorites = new EventEmitter<number>();

  toggleFavorite(item: number) {
    this.beer.favorite = !this.beer.favorite;
    this.favorites.emit(item);
  }
}
