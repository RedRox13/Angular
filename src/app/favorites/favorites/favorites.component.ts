import { Component } from '@angular/core';
import { FavoritesService } from 'src/app/core/favorites.service';
import { Item } from 'src/app/all-recipes/add-recipe/item.model';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  list: Item[] = this.service.getList();
  constructor(
    private service: FavoritesService
  ) { }
}
