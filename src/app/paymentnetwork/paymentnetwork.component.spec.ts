import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentNetworkComponent } from './paymentnetwork.component';

describe('PaymentNetworkComponent', () => {
  let component: PaymentNetworkComponent;
  let fixture: ComponentFixture<PaymentNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentNetworkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
