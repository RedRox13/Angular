import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { AllRecipesComponent } from '../all-recipes/all-recipes.component';
import { RecipesListComponent } from 'src/app/shared/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from 'src/app/shared/recipe-details/recipe-details.component';
import { AllRecipesResolverService } from '../all-recipes-resolver.service';
import { DetailsResolverService } from 'src/app/shared/recipe-details/details-resolver.service';
const routes: Routes = [
  { path: 'all-recipes', component: AllRecipesComponent,
    children: [
    {
      path: '', component: RecipesListComponent,
      resolve: { recipes: AllRecipesResolverService }
    },
  ]},
  { path: 'add-recipe', component: AddRecipeComponent},
  {
    path: 'details/:id', component: RecipeDetailsComponent,
    resolve: { details: DetailsResolverService }
  },
  {
    path: 'edit/:id', component: AddRecipeComponent,
    resolve: { details: DetailsResolverService }
  },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AllRecipesRoutingModule { }
