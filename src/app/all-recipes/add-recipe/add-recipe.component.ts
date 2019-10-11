import { Component, OnInit} from '@angular/core';
import { RecipesArrayService } from 'src/app/core/recipes-array.service';
import { Item } from './item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  addInputCount: Array<any> = [];
  recipeForm: FormGroup;
  intermediateItem: Item;
  item: object;
  recipe: Item;
  counter = 11;
  urlPattern = new RegExp('^(https?:\\/\\/)?' +
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$', 'i');
  constructor(
    private readonly route: ActivatedRoute,
    private recipeArray: RecipesArrayService,
    private readonly router: Router,
    private fb: FormBuilder
  ) { }
  addId() {
    this.recipeArray.addId(this.recipeForm.value, this.counter++);
  }
  onSubmit(value: boolean) {
    if (value) {
      Object.assign(this.recipeArray.getRecipeById(this.route.snapshot.params.id), this.recipeForm.value);
    } else {
      this.addId();
      this.recipeArray.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(['/']);
  }
  addIngredient() {
    this.ingredients.push(this.fb.control(''));
  }

  deleteIngredient(control: any, index: number) {
    control.removeAt(index);
  }

  get title() {
    return this.recipeForm.get('title');
  }
  get description() {
    return this.recipeForm.get('description');
  }
  get url() {
    return this.recipeForm.get('photoUrl');
  }
  get instructions() {
    return this.recipeForm.get('instructions');
  }
  get categoryId() {
    return this.recipeForm.get('categoryId');
  }
  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }
  ngOnInit() {
    this.recipe = this.recipeArray.getRecipeById(this.route.snapshot.params.id);

    this.recipeForm = this.fb.group({
      title: [this.recipe ? this.recipe.title : '', [
        Validators.required,
        Validators.maxLength(50)
      ]],
      description: [this.recipe ? this.recipe.description : '', [
        Validators.required
      ]],
      photoUrl: [this.recipe ? this.recipe.photoUrl : '', [
        Validators.required,
        Validators.pattern(this.urlPattern)
      ]],
      instructions: [this.recipe ? this.recipe.instructions : '', [
        Validators.required
      ]],
      categoryId: [this.recipe ? this.recipe.categoryId : '', [
        Validators.required
      ]],
      ingredients: this.fb.array(this.recipe ? this.recipe.ingredients : [])
    });
  }
}
