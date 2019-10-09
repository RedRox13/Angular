import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: object;
  constructor(
    private readonly route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.recipe = this.route.snapshot.data.details;
  }
}
