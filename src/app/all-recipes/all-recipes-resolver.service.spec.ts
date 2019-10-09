import { TestBed } from '@angular/core/testing';

import { AllRecipesResolverService } from './all-recipes-resolver.service';

describe('AllRecipesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllRecipesResolverService = TestBed.get(AllRecipesResolverService);
    expect(service).toBeTruthy();
  });
});
