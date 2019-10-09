import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from '../favorites/favorites/favorites.component';
import { PurchasesComponent } from '../purchases/purchases/purchases.component';
import { PurchaseResolverService } from '../purchases/purchase-resolver.service';
const appRoutes: Routes = [
  { path: 'all-recipes', loadChildren: 'src/app/all-recipes/all-recipes.module#AllRecipesModule' },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'purchases', component: PurchasesComponent, resolve: { purchases: PurchaseResolverService} },
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
