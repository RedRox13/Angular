import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipesArrayService } from '../core/recipes-array.service';

@Injectable({
  providedIn: 'root'
})
export class AllRecipesResolverService implements Resolve<object[]> {
  constructor(
    private allRecipesService: RecipesArrayService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state:
  RouterStateSnapshot): object[] | Observable<object[]> | Promise<object[]> {
    return this.allRecipesService.getRecipesArray();
  }
}
