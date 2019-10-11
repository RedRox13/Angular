import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesInputComponent } from './purchases-input/purchases-input.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [PurchasesInputComponent, PurchasesComponent, PurchasesListComponent],
  exports: [PurchasesComponent],
  imports: [
    CommonModule, FormsModule
  ]
})
export class PurchasesModule { }
