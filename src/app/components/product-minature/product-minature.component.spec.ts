import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMinatureComponent } from './product-minature.component';

describe('ProductMinatureComponent', () => {
  let component: ProductMinatureComponent;
  let fixture: ComponentFixture<ProductMinatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMinatureComponent]
    });
    fixture = TestBed.createComponent(ProductMinatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
