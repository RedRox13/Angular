import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { AllRecipesModule } from './all-recipes/all-recipes.module';
import { FavoritesModule } from './favorites/favorites.module';
import { PurchasesModule } from './purchases/purchases.module';
import { RecipesArrayService } from './core/recipes-array.service';
import { PurchasesListService } from './core/purchases-list.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, SharedModule, AllRecipesModule, FavoritesModule, PurchasesModule, AppRoutingModule
  ],
  exports: [SharedModule],
  providers: [RecipesArrayService, PurchasesListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
