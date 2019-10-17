import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/all-recipes/add-recipe/item.model';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';
import { Category } from '../category';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipeId: string;
  recipe: Item;
  categories: Category[];
  neededCategory: string;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private recipesArray: RecipesArrayService,
  ) { }
  ngOnInit() {
    this.recipeId = this.route.snapshot.params.id;
    this.recipesArray.getParticularRecipe(this.recipeId)
      .subscribe((recipe: Item) => {
        this.recipe = recipe;
        this.categories = this.recipesArray.categories;
        for (const category of this.categories) {
          if (category.id === recipe.categoryId) {
            this.neededCategory = category.name;
          }
        }
    });
  }
  goTo(url: string, id: number) {
    this.router.navigate([url, id]);
  }
  addToPurchase(ingredients: string[]) {
    ingredients.forEach((el) => {
      this.recipesArray.addPurchase(el);
    });
  }
  addToFavorites(recipe: Item) {
    this.recipesArray.addFavorite(recipe.id);
  }
}
