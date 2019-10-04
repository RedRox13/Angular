import { TestBed } from '@angular/core/testing';

import { RecipesArrayService } from './recipes-array.service';

describe('RecipesArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesArrayService = TestBed.get(RecipesArrayService);
    expect(service).toBeTruthy();
  });
});
