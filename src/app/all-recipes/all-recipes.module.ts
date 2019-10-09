import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SharedModule } from '../shared/shared.module';
import { AllRecipesRoutingModule } from './all-recipes-routing/all-recipes-routing.module';

@NgModule({
  declarations: [AddRecipeComponent, AllRecipesComponent],
  imports: [
    CommonModule, SharedModule, AllRecipesRoutingModule
  ]
})
export class AllRecipesModule { }
