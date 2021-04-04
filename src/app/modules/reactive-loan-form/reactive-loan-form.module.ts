import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveLoanFormRoutingModule } from './reactive-loan-form-routing.module';
import { ReactiveLoanFormComponent } from './pages/reactive-loan-form/reactive-loan-form.component';
import { QuestionService } from '../shared/services/question.service';
import { QuestionControlService } from '../shared/services/question-control.service';

@NgModule({
  declarations: [ReactiveLoanFormComponent],
  imports: [
    CommonModule,
    SharedModule, 
    ReactiveLoanFormRoutingModule,
  ],
  providers: [
    QuestionService,
    QuestionControlService
  ]
})
export class ReactiveLoanFormModule { }
