import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineofcreditComponent } from './lineofcredit.component';

describe('LineofcreditComponent', () => {
  let component: LineofcreditComponent;
  let fixture: ComponentFixture<LineofcreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineofcreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineofcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
