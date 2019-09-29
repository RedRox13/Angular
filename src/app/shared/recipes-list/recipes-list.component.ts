import { Component, OnInit } from '@angular/core';
import recipes from '../../recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Array<object>;
  constructor() {
    this.recipes = recipes;

  }

  ngOnInit() {
  }

}
