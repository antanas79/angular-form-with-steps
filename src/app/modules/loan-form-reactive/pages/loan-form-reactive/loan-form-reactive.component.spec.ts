import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanFormReactiveComponent } from './loan-form-reactive.component';

describe('LoanFormReactiveComponent', () => {
  let component: LoanFormReactiveComponent;
  let fixture: ComponentFixture<LoanFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanFormReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
