import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../beer';
import { BeerService } from '../services/beer.service';
import { RecipeService } from '../services/recipe.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss'],
})
export class BeerDetailComponent implements OnInit {
  public beer: Beer;
  public recipes: any = [];
  public isLoading: boolean = true;
  public recipeCount: Array<number>;

  constructor(private route: ActivatedRoute, private beerService: BeerService, private recipeService: RecipeService, private loaderService: LoaderService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.beerService.getById(params['id']).subscribe((beer) => {
        this.beer = beer;
        this.getRecipes(this.beer.food_pairing);
        });
    });
  }

  ngAfterViewInit() {
    this.loaderService.httpProgress().subscribe((status: boolean) => {
      if (status) {
        // this.renderer.addClass(document.body, 'cursor-loader');
        this.isLoading = true;
      } else {
        // this.renderer.removeClass(document.body, 'cursor-loader');
        this.isLoading = false;
      }
    });
  }

  private getRecipes(item: any) {
    const recipes = item;
    // Get recipes from query text
    const recipesList = recipes.forEach((element: any) => {
      this.recipeService.getRecipesByQuery(element).subscribe((recipe: any) => {
        Object.entries(recipe).forEach((entry: any) => {
          const [key, value] = entry;
          if(key === "hits") {
            const recipes = value.map(function(value: any) {
              return value.recipe;
            });
            this.recipes = recipes;
            this.recipeCount = this.recipes.length;
          }
        });
      });
    })
  }
}
