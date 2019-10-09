import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: any;
  constructor(
    private readonly router: Router,
    private recipeArray: RecipesArrayService,
    ) {
  }
  removeRecipe(title: string): void {
    this.recipeArray.removeRecipe(title);
  }
  goTo(url: string, title: string) {
    this.router.navigate([url, title]);
  }
}
