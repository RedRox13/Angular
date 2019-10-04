import { Component, OnInit } from '@angular/core';
import { PurchasesListService } from 'src/app/core/purchases-list.service';

@Component({
  selector: 'app-purchases-input',
  templateUrl: './purchases-input.component.html',
  styleUrls: ['./purchases-input.component.scss']
})
export class PurchasesInputComponent implements OnInit {

  constructor(private readonly PurchaseService: PurchasesListService) { }

  ngOnInit() {
  }
  addPurchase(item: string): void {
    this.PurchaseService.addPurchase(item);
  }
}
