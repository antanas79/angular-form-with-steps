import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveLoanFormRoutingModule } from './reactive-loan-form-routing.module';
import { ReactiveLoanFormComponent } from './pages/reactive-loan-form/reactive-loan-form.component';


@NgModule({
  declarations: [ReactiveLoanFormComponent],
  imports: [
    CommonModule,
    SharedModule, 
    ReactiveLoanFormRoutingModule
  ]
})
export class ReactiveLoanFormModule { }
