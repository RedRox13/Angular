import { Component, OnInit } from '@angular/core';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  providers: [RecipesArrayService]
})
export class RecipesListComponent implements OnInit {
  recipes: Array<object>;
  constructor(private recipeArray: RecipesArrayService) {
  }

  ngOnInit() {
    this.recipes = this.recipeArray.getRecipesArray();
  }

}
