import { Component, OnInit} from '@angular/core';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';
import { Item } from './item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  intermediateItem: Item;
  item: object;
  recipe: object;
  constructor(
    private readonly route: ActivatedRoute,
    private recipeArray: RecipesArrayService
  ) { }
  createRecipe(obj: object) {
    this.item = {};
    Object.assign(this.item, obj);
  }

  addRecipe(obj: object) {
    this.createRecipe(obj);
    this.recipeArray.addRecipe(this.item);
  }
  saveRecipe(obj: object) {
    const recipeObj: object = this.recipeArray.getRecipeByTitle(this.route.snapshot.params.title);
    Object.assign(recipeObj, obj);
  }
  ngOnInit() {
    this.recipe = this.recipeArray.getRecipeByTitle(this.route.snapshot.params.title);
  }
}
