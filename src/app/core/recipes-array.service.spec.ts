import { TestBed } from '@angular/core/testing';
import { RecipesArrayService } from './recipes-array.service';
import { of, Observable } from 'rxjs';
import { Item } from '../all-recipes/add-recipe/item.model';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('RecipesArrayService', () => {
  let service: RecipesArrayService;
  const Items: Item[] = [];
  const httpClientSpy: any = {
    get: (): Observable<{}> => of({}),
    delete: (): Observable<null> => of(null),
    put: (): Observable<null> => of(null),
    post: (): Observable<Item> => of(),
  };
  beforeEach(() => {
    service = new RecipesArrayService(httpClientSpy);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [RecipesArrayService, httpClientSpy]
    });
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getRecipesArray', () => {

    it('getRecipesArray should make get request', () => {
      spyOn(httpClientSpy, 'get');
      service.getRecipesArray();
      expect(httpClientSpy.get).toHaveBeenCalled();
    });
    it('getRecipesArray should return array', async () => {
      spyOn(httpClientSpy, 'get').and.returnValue(of(Items));
      service.getRecipesArray().subscribe((data) => {
        expect(data).toEqual(Items);
      });
    });
  });
  describe('removeRecipe', () => {
    it('removeRecipe should make delete request', async () => {
      const id = '1';
      spyOn(httpClientSpy, 'delete').and.returnValue({ subscribe: () => {} });
      service.removeRecipe(id);
      expect(httpClientSpy.delete).toHaveBeenCalled();
    });
  });
  describe('editRecipe', () => {
    it('editRecipe should make put request', async () => {
      let obj: Item;
      spyOn(httpClientSpy, 'put').and.returnValue({ subscribe: () => {} });
      service.editRecipe(obj);
      expect(httpClientSpy.put).toHaveBeenCalled();
    });
  });
  describe('putLike', () => {
    it('putLike should make post request', async () => {
      const id = '1';
      spyOn(httpClientSpy, 'post').and.returnValue({ subscribe: () => {} });
      service.putLike(id);
      expect(httpClientSpy.post).toHaveBeenCalled();
    });
  });
});
