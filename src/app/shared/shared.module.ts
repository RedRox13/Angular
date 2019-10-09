import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { BoxshadowDirective } from './boxshadow.directive';
import { ShortNamePipe } from './short-name.pipe';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AllRecipesRoutingModule } from '../all-recipes/all-recipes-routing/all-recipes-routing.module';
@NgModule({
  declarations: [RecipeItemComponent, RecipesListComponent, BoxshadowDirective, ShortNamePipe, RecipeDetailsComponent],
  exports: [RecipeItemComponent, RecipesListComponent, ShortNamePipe],
  imports: [
    CommonModule, AllRecipesRoutingModule,
  ]
})
export class SharedModule { }
