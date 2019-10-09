import { Component, OnInit } from '@angular/core';
import { PurchasesListService } from 'src/app/core/purchases-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit {
  list: string[];
  constructor(private readonly purchaseService: PurchasesListService,
              private route: ActivatedRoute,
  ) { }
  deletePurchase(item: any): void {
    this.purchaseService.deletePurchase(item);
  }
  ngOnInit() {
    this.list = this.route.snapshot.data.purchases;
  }

}
