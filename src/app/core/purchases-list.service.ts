import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchasesListService {
  list: string[] = [];
  getList(): string[] {
    return this.list;
  }
  addPurchase(item: string): void {
    if (item.length > 0 && this.list.indexOf(item) === -1) {
      this.list.push(item);
    }
  }
  deletePurchase(item: string): void {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
