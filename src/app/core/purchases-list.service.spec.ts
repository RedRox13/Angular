import { TestBed } from '@angular/core/testing';

import { PurchasesListService } from './purchases-list.service';

describe('PurchasesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchasesListService = TestBed.get(PurchasesListService);
    expect(service).toBeTruthy();
  });
});
