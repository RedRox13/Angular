import { TestBed } from '@angular/core/testing';

import { PurchaseResolverService } from './purchase-resolver.service';

describe('PurchaseResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseResolverService = TestBed.get(PurchaseResolverService);
    expect(service).toBeTruthy();
  });
});
