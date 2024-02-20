import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorBotonesComponent } from './contador-botones.component';

describe('ContadorBotonesComponent', () => {
  let component: ContadorBotonesComponent;
  let fixture: ComponentFixture<ContadorBotonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContadorBotonesComponent]
    });
    fixture = TestBed.createComponent(ContadorBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
