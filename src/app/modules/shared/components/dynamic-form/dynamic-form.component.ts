import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

import { QuestionBase } from '../../classes/question-base';
import { Step } from '../../classes/step';
import { QuestionControlService } from '../../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  @Input() steps: Step[] = [];
  @Output() onFormValueChanges = new EventEmitter<string>();
  form: FormGroup;
  stepsForm: FormGroup;
  payLoad = '';


  constructor(private _formBuilder: FormBuilder, private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this._formBuilder.group({
      formArray: this.qcs.toFormArray(this.questions)
    });

    this.stepsForm = this._formBuilder.group({
      steps: this.qcs.toFormStepsArray(this.steps)
    });

    console.log(this.questions)
    this.onChanges();
  }

  onChanges(): void {
    this.form.valueChanges.subscribe(val => {
        this.onFormValueChanges.emit(this.form.value)
    });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
