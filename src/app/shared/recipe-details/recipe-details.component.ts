import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/all-recipes/add-recipe/item.model';
import { PurchasesListService } from 'src/app/core/purchases-list.service';
import { FavoritesService } from 'src/app/core/favorites.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Item;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private purchaseArray: PurchasesListService,
    private favoritesList: FavoritesService
  ) { }
  ngOnInit() {
    this.recipe = this.route.snapshot.data.details;
  }
  goTo(url: string, id: number) {
    this.router.navigate([url, id]);
  }
  addToPurchase(ingredients: string[]) {
    ingredients.forEach((el) => {
      this.purchaseArray.addPurchase(el);
    });
  }
  addToFavorites(recipe: Item) {
    this.favoritesList.addFavorite(recipe);
  }
}
