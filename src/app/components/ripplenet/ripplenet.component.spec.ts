import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RipplenetComponent } from './ripplenet.component';

describe('RipplenetComponent', () => {
  let component: RipplenetComponent;
  let fixture: ComponentFixture<RipplenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RipplenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RipplenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
