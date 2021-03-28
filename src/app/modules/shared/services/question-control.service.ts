import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { QuestionBase } from '../classes/question-base';

@Injectable()
export class QuestionControlService {
  constructor(private _formBuilder: FormBuilder) { }

  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  toFormArray(questions: QuestionBase<string>[] ) {
    let list = this._formBuilder.array([]);

    questions.forEach(question => {
      let item: any = {};
      item[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
      list.push(new FormGroup(item));
    });
    
    return list;
  }
}