import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';
import { Item } from 'src/app/all-recipes/add-recipe/item.model';
@Injectable({
  providedIn: 'root'
})
export class DetailsResolverService implements Resolve<Item> {
  constructor(
    private service: RecipesArrayService,
  ) { }
  resolve(route: ActivatedRouteSnapshot, state:
  RouterStateSnapshot): Item | Observable<Item> | Promise<Item> {
    return this.service.getParticularRecipe(route.params.id);
  }
}
