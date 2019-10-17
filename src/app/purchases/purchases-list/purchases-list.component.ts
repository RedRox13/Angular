import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit {
  list: any[];
  constructor(private readonly purchaseService: RecipesArrayService,
              private route: ActivatedRoute,
  ) { }
  deletePurchase(item: any): void {
    this.purchaseService.deletePurchase(item);
  }
  ngOnInit() {
    this.list = this.route.snapshot.data.purchases;
    this.purchaseService.recipeSubject.subscribe(() => {
      this.purchaseService.getPurchasesList().subscribe((data) => {
        this.list = data;
      });
    });
  }
}
