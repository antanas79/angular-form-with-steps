import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { QuestionBase } from '../../classes/question-base';
import { QuestionControlService } from '../../services/question-control.service';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  @Input() formArrayStringName: any;
  @Input() formGroupNameNumber: number;
  @Output() onQuestionValuesChanged = new EventEmitter<string>();


  constructor(private _formBuilder: FormBuilder, private qcs: QuestionControlService) {  }
  ngOnInit() {
    console.log(this.question)
    console.log(this.form)
    console.log(this.formArrayStringName)
    console.log(this.formGroupNameNumber)
    // let validators = [];
    // this.question.required ? validators.push(Validators.required): validators.push('');
    // this.onChanges();
  }

  // onChanges(): void {
  //   this.form.valueChanges.subscribe(val => {
  //       this.onQuestionValuesChanged.emit(this.form.value)
  //   });
  // }
}

