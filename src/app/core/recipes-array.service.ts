import { Injectable } from '@angular/core';
import { Item } from '../all-recipes/add-recipe/item.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../shared/category';

@Injectable({
  providedIn: 'root'
})
export class RecipesArrayService {
  recipeSubject = new Subject();
  categories: Category[];
  recipes: Item[];
  serverUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {
    this.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  getRecipesArray(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.serverUrl}/recipes`);
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.serverUrl}/categories`);
  }
  removeRecipe(id: string): any {
    const url = `${this.serverUrl}/recipes/${id}`;
    this.http.delete(url).subscribe(() => {
      this.recipeSubject.next();
    });
  }
  addRecipe(item: Item) {
    this.http.post<Item>(`${this.serverUrl}/recipes`, item)
      .subscribe(() => {
        this.recipeSubject.next();
    });
  }
  editRecipe(item: Item) {
    this.http.put<Item>(`${this.serverUrl}/recipes`, item)
      .subscribe(() => {
        this.recipeSubject.next();
    });
  }
  getParticularRecipe(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.serverUrl}/recipes/${id}`);
  }
  putLike(id: string) {
    this.http.post(`${this.serverUrl}/recipes/likes`, {id})
      .subscribe(() => {
        this.recipeSubject.next();
    });
  }
  putDislike(id: string) {
    this.http.post(`${this.serverUrl}/recipes/dislikes`, {id})
      .subscribe(() => {
        this.recipeSubject.next();
    });
  }
  getFavoritesList(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.serverUrl}/favorites`);
  }
  addFavorite(id: string) {
    this.http.post(`${this.serverUrl}/favorites`, {id})
      .subscribe(() => {
        this.recipeSubject.next();
      });
  }
  deleteFavorite(id: string) {
    const url = `${this.serverUrl}/favorites/${id}`;
    this.http.delete(url).subscribe(() => {
      this.recipeSubject.next();
    });
  }
  getPurchasesList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverUrl}/purchases`);
  }
  addPurchase(purchases: string) {
    this.http.post(`${this.serverUrl}/purchases`, {purchases})
      .subscribe(() => {
        this.recipeSubject.next();
      });
  }
  deletePurchase(id: string) {
    const url = `${this.serverUrl}/purchases/${id}`;
    this.http.delete(url).subscribe(() => {
      this.recipeSubject.next();
    });
  }
}
