import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveLoanFormComponent } from './reactive-loan-form.component';

describe('ReactiveLoanFormComponent', () => {
  let component: ReactiveLoanFormComponent;
  let fixture: ComponentFixture<ReactiveLoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveLoanFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveLoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
