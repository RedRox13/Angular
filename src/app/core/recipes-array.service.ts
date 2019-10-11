import { Injectable } from '@angular/core';
import recipes from './../recipes';
import { Item } from '../all-recipes/add-recipe/item.model';
@Injectable({
  providedIn: 'root'
})
export class RecipesArrayService {
  recipes: object[];
  constructor() {
    this.recipes = recipes;
  }
  getRecipeById(id: string): Item {
    for (const recipe of recipes) {
      if (recipe.id === +id) {
        return recipe;
      }
    }
  }
  getRecipesArray(): object[]  {
    return this.recipes;
  }
  addId(item: Item, id: number) {
    item.id = id;
    item.likes = item.likes ? item.likes : 0;
  }
  addRecipe(item: Item) {
    for (const recipe of recipes) {
      if (item.id === recipe.id) {
        return;
      }
    }
    this.recipes.push(item);
  }
  removeRecipe(id: any) {
    for (const recipe of recipes) {
      if (id === recipe.id) {
        recipes.splice(recipes.indexOf(recipe), 1);
      }
    }
  }
}
