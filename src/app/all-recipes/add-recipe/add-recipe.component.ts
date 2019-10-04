import { Component, OnInit} from '@angular/core';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  intermediateItem: object =  {
    title: '',
    description: '',
    photoUrl: '',
    ingredients: [],
    instructions: '',
    categoryId: '',
    likes: 0
  };
  item: object;

  constructor(private recipeArray: RecipesArrayService) {
  }
  createRecipe(obj: object): void {
    this.item = {};
    Object.assign(this.item, obj);
  }

  addRecipe(obj: object): void {
    this.createRecipe(obj);
    this.recipeArray.addRecipe(this.item);
  }
  ngOnInit() {
  }
}
