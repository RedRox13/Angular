import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases/purchases.component';



@NgModule({
  declarations: [PurchasesComponent],
  exports: [PurchasesComponent],
  imports: [
    CommonModule
  ]
})
export class PurchasesModule { }
