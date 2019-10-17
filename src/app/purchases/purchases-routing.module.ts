import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PurchasesComponent } from './purchases/purchases.component';
import { PurchaseResolverService } from './purchase-resolver.service';


const routes: Routes = [
  {
    path: 'purchases', component: PurchasesComponent,
    resolve: {purchases: PurchaseResolverService}
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
