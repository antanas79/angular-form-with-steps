import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Step } from '../../classes/step';
import { QuestionControlService } from '../../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() steps: Step[] = [];
  @Output() onFormValueChanges = new EventEmitter<string>();

  stepsForm: FormGroup;
  payLoad = '';
  isLinear = true;

  constructor(private _formBuilder: FormBuilder, private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.stepsForm = this._formBuilder.group({
      steps: this.qcs.toFormStepsArray(this.steps)
    });

    this.onChanges();
  }

  onChanges(): void {
    this.stepsForm.valueChanges.subscribe(val => {
      this.onFormValueChanges.emit(this.stepsForm.getRawValue());
    });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.stepsForm.getRawValue());
  }
}
