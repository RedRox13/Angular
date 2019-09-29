import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@NgModule({
  declarations: [RecipeItemComponent, RecipesListComponent],
  exports: [RecipeItemComponent, RecipesListComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
