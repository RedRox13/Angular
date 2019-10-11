import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';
@Injectable({
  providedIn: 'root'
})
export class DetailsResolverService implements Resolve<object> {
  constructor(
    private service: RecipesArrayService,
  ) { }
  resolve(route: ActivatedRouteSnapshot, state:
  RouterStateSnapshot): object | Observable<object> | Promise<object> {
    return this.service.getRecipeById(route.paramMap.get('id'));
  }
}
