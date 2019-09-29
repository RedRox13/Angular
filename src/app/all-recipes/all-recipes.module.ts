import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AddRecipeComponent, AllRecipesComponent],
  exports: [AllRecipesComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class AllRecipesModule { }
