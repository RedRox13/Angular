import { Component, OnInit } from '@angular/core';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';
import { ActivatedRoute, Data } from '@angular/router';
import { Item } from 'src/app/all-recipes/add-recipe/item.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  providers: [RecipesArrayService]
})
export class RecipesListComponent implements OnInit {
  recipes: Item[];
  constructor(
    private recipesService: RecipesArrayService,
    private route: ActivatedRoute,
  ) {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.recipes = data.recipes;
        }
      );
  }
  ngOnInit() {
    this.recipesService.recipeSubject.subscribe(() => {
      this.getRecipes();
    });
  }
  getRecipes() {
    this.recipesService.getRecipesArray()
      .subscribe(recipes => {
        this.recipes = recipes;
        this.recipesService.recipes = recipes;
      });
  }
}
