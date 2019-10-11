import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SharedModule } from '../shared/shared.module';
import { AllRecipesRoutingModule } from './all-recipes-routing/all-recipes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddRecipeComponent, AllRecipesComponent],
  imports: [
    CommonModule, SharedModule, AllRecipesRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class AllRecipesModule { }
