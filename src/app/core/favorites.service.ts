import { Injectable } from '@angular/core';
import { Item } from '../all-recipes/add-recipe/item.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  list: Item[] = [];
  constructor() { }
  getList(): Item[] {
    return this.list;
  }
  addFavorite(obj: Item) {
    for (const item of this.list) {
      if (item.id === obj.id) {
        return;
      }
    }
    this.list.push(obj);
  }
  removeRecipe(id: any) {
    for (const item of this.list) {
      if (id === item.id) {
        this.list.splice(this.list.indexOf(item), 1);
      }
    }
  }
}
