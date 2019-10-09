import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PurchasesListService } from '../core/purchases-list.service';
import { PurchasesModule } from './purchases.module';

@Injectable({
  providedIn: PurchasesModule
})
export class PurchaseResolverService implements Resolve<string[]> {
  constructor(
    private purchasesService: PurchasesListService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   string[] | Observable<string[]> | Promise<string[]> {
    return this.purchasesService.getList();
  }
}
