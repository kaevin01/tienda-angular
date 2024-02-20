import { TestBed } from '@angular/core/testing';

import { ProductByBrandService } from './product-by-brand.service';

describe('ProductByBrandService', () => {
  let service: ProductByBrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductByBrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
