import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipesArrayService } from '../core/recipes-array.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseResolverService implements Resolve<any[]> {
  constructor(
    private purchasesService: RecipesArrayService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   any[] | Observable<any[]> | Promise<any[]> {
    return this.purchasesService.getPurchasesList();
  }
}
