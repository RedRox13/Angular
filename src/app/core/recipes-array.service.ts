import { Injectable } from '@angular/core';
import recipes from './../recipes';
@Injectable({
  providedIn: 'root'
})
export class RecipesArrayService {
  recipes: object[];
  constructor() {
    this.recipes = recipes;
  }
  getRecipeByTitle(title: string): object {
    for (const recipe of recipes) {
      if (recipe.title === title) {
        return recipe;
      }
    }
  }
  getRecipesArray(): object[]  {
    return this.recipes;
  }
  addRecipe(item: any) {
    for (const recipe of recipes) {
      if (item.title === recipe.title) {
        return;
      }
    }
    this.recipes.push(item);
  }
  removeRecipe(obj: any) {
    for (const recipe of recipes) {
      if (obj.title === recipe.title) {
        recipes.splice(recipes.indexOf(recipe), 1);
      }
    }
  }
}
