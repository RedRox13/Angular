import { Injectable } from '@angular/core';
import recipes from './../recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesArrayService {
  recipes: Array<object>;

  constructor() {
    this.recipes = recipes;
  }
  getRecipesArray(): Array<object>  {
    return this.recipes;
  }
  addRecipe(item: any): void {
    for (const recipe of recipes) {
      if (item.title === recipe.title) {
        return;
      }
    }
    this.recipes.push(item);
  }
  removeRecipe(obj: any): void {
    for (const recipe of recipes) {
      if (obj.title === recipe.title) {
        recipes.splice(recipes.indexOf(recipe), 1);
      }
    }
  }
}
