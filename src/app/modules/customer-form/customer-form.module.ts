import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared/shared.module';
import { CustomerFormRoutingModule } from './customer-form-routing.module';
import { CustomerFormComponent } from '../customer-form/pages/customer-form/customer-form.component';


@NgModule({
  declarations: [CustomerFormComponent],
  imports: [
    CommonModule,
    SharedModule, 
    CustomerFormRoutingModule
  ]
})
export class CustomerFormModule { }
