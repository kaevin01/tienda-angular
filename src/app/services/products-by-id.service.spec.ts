import { TestBed } from '@angular/core/testing';

import { ProductsByIdService } from './products-by-id.service';

describe('ProductsByIdService', () => {
  let service: ProductsByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
