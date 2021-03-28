import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { QuestionService } from '../../../shared/services/question.service';
import { QuestionBase } from '../../../shared/classes/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  },
  QuestionService]
})
export class CustomerFormComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;
  title = 'newMat';
  isLinear = true;

  constructor(service: QuestionService, 
    private _formBuilder: FormBuilder) {
      this.questions$ = service.getLoanQuestions();
    }

  ngOnInit() {
  }

  updateFormValues(event) {
    console.log(event)
  }

  submit(){
  }

}
