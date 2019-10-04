import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { BoxshadowDirective } from './boxshadow.directive';
import { ShortNamePipe } from './short-name.pipe';

@NgModule({
  declarations: [RecipeItemComponent, RecipesListComponent, BoxshadowDirective, ShortNamePipe],
  exports: [RecipeItemComponent, RecipesListComponent, ShortNamePipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
