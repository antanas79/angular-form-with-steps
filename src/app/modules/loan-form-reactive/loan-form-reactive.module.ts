import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanFormReactiveRoutingModule } from './loan-form-reactive-routing.module';
import { LoanFormReactiveComponent } from './pages/loan-form-reactive/loan-form-reactive.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoanFormReactiveComponent],
  imports: [
    CommonModule,
    SharedModule, 
    LoanFormReactiveRoutingModule
  ]
})
export class LoanFormReactiveModule { }
