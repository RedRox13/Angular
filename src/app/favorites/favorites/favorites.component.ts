import { Component } from '@angular/core';
import { Item } from 'src/app/all-recipes/add-recipe/item.model';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  list: Item[];
  constructor(
    private service: RecipesArrayService
  ) {
    this.service.getFavoritesList()
      .subscribe((list: Item[]) => {
        this.list = list;
      });
    this.service.recipeSubject.subscribe(() => {
      this.service.getFavoritesList()
        .subscribe((list: Item[]) => {
          this.list = list;
        });
    });
  }
}
