import { Component } from '@angular/core';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';
@Component({
  selector: 'app-purchases-input',
  templateUrl: './purchases-input.component.html',
  styleUrls: ['./purchases-input.component.scss']
})
export class PurchasesInputComponent {
  constructor(private readonly PurchaseService: RecipesArrayService) { }
  addPurchase(item: string): void {
    this.PurchaseService.addPurchase(item);
  }
}
