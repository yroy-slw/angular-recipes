import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private httpClient: HttpClient, ) {}

  /**
   * Documentation: https://developer.edamam.com/edamam-docs-recipe-api
   * app_id = ${environment.recipeApiId}
   * app_key = ${environment.recipeApiKey}
   *
   * Attention, max 10 requêtes par minutes
   */

  // For Ex. https://api.edamam.com/api/recipes/v2?type=public&q=Fresh%20crab%20with%20lemon&app_id=4952b8da&app_key=d8401ababc93d5a8ddfd352e9a9a5c36
  getRecipesByQuery(q: string): Observable<any> {
    return this.httpClient.get<any>(`https://api.edamam.com/api/recipes/v2/?type=public&q=${q}&app_id=${environment.recipeApiId}&app_key=${environment.recipeApiKey}`);
  }
}
