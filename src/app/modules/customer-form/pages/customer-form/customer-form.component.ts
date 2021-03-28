import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { QuestionService } from '../../../shared/services/question.service';
import { QuestionBase } from '../../../shared/classes/question-base';
import { Step } from '../../../shared/classes/step';
import { Observable, pipe } from 'rxjs';

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
  steps$: Observable<Step[]>;
  title = 'newMat';
  isLinear = true;

  constructor(service: QuestionService, 
    private _formBuilder: FormBuilder) {
      this.questions$ = service.getLoanQuestions();
      this.steps$ = service.getLoanStepsWithQuestions();
    }

  ngOnInit() {
    // this.steps$.pipe(
    //   map => map
    // ).subscribe((res => console.log(res)))
  }

  updateFormValues(event) {
    console.log(event)
  }

  submit(){
  }

}
