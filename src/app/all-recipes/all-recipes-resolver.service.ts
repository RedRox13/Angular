import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipesArrayService } from '../core/recipes-array.service';
import { Item } from './add-recipe/item.model';

@Injectable({
  providedIn: 'root'
})
export class AllRecipesResolverService implements Resolve<Item[]> {
  constructor(
    private allRecipesService: RecipesArrayService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state:
  RouterStateSnapshot): Item[] | Observable<Item[]> | Promise<Item[]> {
    return this.allRecipesService.getRecipesArray();
  }
}
