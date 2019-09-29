import { Component, OnInit} from '@angular/core';
import recipes from 'src/app/recipes';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  item: object =  {
    title: '',
    description: '',
    photoUrl: '',
    ingredients: [],
    instructions: '',
    categoryId: '',
    likes: 0
  };

  constructor() { }

  ngOnInit() {
  }

  addRecipe(): void {
    recipes.push(<any> this.item); 
  }
}
