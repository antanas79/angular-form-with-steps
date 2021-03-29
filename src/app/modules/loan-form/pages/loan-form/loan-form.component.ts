import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { QuestionService } from '../../../shared/services/question.service';
import { QuestionBase } from '../../../shared/classes/question-base';
import { Step } from '../../../shared/classes/step';
import { Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  },
  QuestionService]
})

export class LoanFormComponent implements OnInit {
  steps$: Observable<Step[]>;
  isLinear = true;

  constructor(private service: QuestionService, 
    private _formBuilder: FormBuilder) {
      this.steps$ = service.getLoanStepsWithQuestions();
    }

  ngOnInit() {
  }

  handleChanges(event) {
  }

  submit(){
  }

}
