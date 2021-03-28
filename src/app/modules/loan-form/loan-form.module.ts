import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoanFormRoutingModule } from './loan-form-routing.module';
import { LoanFormComponent } from './pages/loan-form/loan-form.component';

@NgModule({
  declarations: [LoanFormComponent],
  imports: [
    CommonModule,
    SharedModule, 
    LoanFormRoutingModule
  ]
})
export class LoanFormModule { }
