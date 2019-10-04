import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesInputComponent } from './purchases-input.component';

describe('PurchasesInputComponent', () => {
  let component: PurchasesInputComponent;
  let fixture: ComponentFixture<PurchasesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
