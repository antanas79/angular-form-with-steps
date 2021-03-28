import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Step } from '../classes/step';

@Injectable()
export class QuestionControlService {
  constructor(private _formBuilder: FormBuilder) { }

  toFormStepsArray(steps: Step[] ) {
    let stepsArray =  this._formBuilder.array([])
    for (let i=0; i < steps?.length; i++) {
      let item: any = {};
      for (let j = 0; j < steps[i].questions?.length; j++) {
        item[steps[i].questions[j].key] = steps[i].questions[j].required ? new FormControl(steps[i].questions[j].value || '', Validators.required)
                                            : new FormControl(steps[i].questions[j].value || '');
      }
      stepsArray.push(new FormGroup(item))
    }

    return stepsArray;
  }
}