import { Component, OnInit, Input} from '@angular/core';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: any;

  constructor(private recipeArray: RecipesArrayService) {
  }
  removeRecipe(title: string): void {
    this.recipeArray.removeRecipe(title);
  }
  ngOnInit() {
  }

}
