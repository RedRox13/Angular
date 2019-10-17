import { Component, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute,
    ) {
  }
  removeRecipe(id: string): void {
      this.recipeArray.deleteFavorite(id);
      if (!this.route.snapshot.data.id) {
        this.recipeArray.removeRecipe(id);
      }
  }
  putLike(id: string) {
    this.recipeArray.putLike(id);
  }
  putDislike(id: string) {
    this.recipeArray.putDislike(id);
  }
  goTo(url: string, id: string) {
    this.router.navigate([url, id]);
  }
}
