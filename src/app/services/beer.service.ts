import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Documentation: https://punkapi.com/documentation/v2
   * @returns
   */
  getAll(): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(`https://api.punkapi.com/v2/beers`);
  }

  getById(id: string): Observable<Beer> {
    return this.httpClient.get<[Beer]>(`https://api.punkapi.com/v2/beers/${id}`).pipe(map((beer) => beer[0]));
  }
}
