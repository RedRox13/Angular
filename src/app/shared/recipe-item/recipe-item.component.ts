import { Component, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';
import { FavoritesService } from 'src/app/core/favorites.service';
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
    private favoritesList: FavoritesService
    ) {
  }
  removeRecipe(id: number): void {
    if (this.route.snapshot.routeConfig.path === 'favorites') {
      this.favoritesList.removeRecipe(id);
    } else {
      this.favoritesList.removeRecipe(id);
      this.recipeArray.removeRecipe(id);
    }
  }
  goTo(url: string, id: number) {
    this.router.navigate([url, id]);
  }
}
