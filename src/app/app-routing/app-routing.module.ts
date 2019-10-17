import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'all-recipes', loadChildren: 'src/app/all-recipes/all-recipes.module#AllRecipesModule' },
  { path: 'favorites', loadChildren: 'src/app/favorites/favorites.module#FavoritesModule' },
  { path: 'purchases', loadChildren: 'src/app/purchases/purchases.module#PurchasesModule' },
  { path: '', redirectTo: 'all-recipes', pathMatch: 'full' },
  { path: '**', redirectTo: 'all-recipes', pathMatch: 'full' }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
