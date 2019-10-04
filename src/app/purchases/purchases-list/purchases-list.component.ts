import { Component, OnInit } from '@angular/core';
import { PurchasesListService } from 'src/app/core/purchases-list.service';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit {
  list: string[];
  constructor(private readonly purchaseService: PurchasesListService) {
    this.list = purchaseService.list;
  }
  deletePurchase(item: any): void {
    this.purchaseService.deletePurchase(item);
  }
  ngOnInit() {
  }

}
