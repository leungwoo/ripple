import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFlexLayoutComponent } from './angular-flex-layout.component';

describe('AngularFlexLayoutComponent', () => {
  let component: AngularFlexLayoutComponent;
  let fixture: ComponentFixture<AngularFlexLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFlexLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFlexLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
