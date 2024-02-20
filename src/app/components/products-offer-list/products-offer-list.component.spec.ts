import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOfferListComponent } from './products-offer-list.component';

describe('ProductsOfferListComponent', () => {
  let component: ProductsOfferListComponent;
  let fixture: ComponentFixture<ProductsOfferListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsOfferListComponent]
    });
    fixture = TestBed.createComponent(ProductsOfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
