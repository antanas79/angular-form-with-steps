import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  // providers:
  // [ { 
  //   provide: NG_VALUE_ACCESSOR,
  //   multi: true,
  //   useExisting: forwardRef(() => QuestionComponent),
  // }],
})
export class QuestionComponent  {
  @Input() question: any = {};
  @Input() form: FormGroup;
  @Input() formGroupNameNumber: number;
  @Input() formArrayNameString: string;
  @Output() onInputValueChanges = new EventEmitter<string>();
  value: string;
  onChange(event) {}
  onTouched() {}
  isDisabled: boolean = false;
  control: FormControl;
  
  constructor() { }

  // writeValue(value) {
  //   this.value = value
  // }

  // registerOnChange(fn) {
  //   this.onChange = fn
  //   console.log(fn)
  // }

  // registerOnTouched(fn) {
  //   this.onTouched = fn
  // }

  // setDisabledState(isDisabled) {
  //   this.isDisabled = isDisabled;
  // }
}
