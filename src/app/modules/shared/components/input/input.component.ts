import { Component, OnInit, Input, Output, EventEmitter,forwardRef } from '@angular/core';
import { ControlValueAccessor, Form, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, FormGroupDirective, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  // providers:
  // [ { 
  //   provide: NG_VALUE_ACCESSOR,
  //   multi: true,
  //   useExisting: forwardRef(() => InputComponent),
  // }],
})
export class InputComponent {
  @Input() question: any = {};
  @Input() form: FormGroup;
  @Input() group: FormGroup;
  @Input() id: string;
  @Input() type: string;
  @Input() formGroupNameNumber: number;
  @Input() formArrayNameString: string;
  @Input() formControlNameString: string;
  @Output() onInputValueChanges = new EventEmitter<string>();
  // value: string;
  // onChange(event) {}
  // onTouched() {}
  // isDisabled: boolean = false;
  // control: FormControl;

  constructor(public _formBuilder: FormBuilder) { }

  // writeValue(value) {
  //   this.value = value
  // }

  // registerOnChange(fn) {
  //   this.onChange = fn
  // }

  // registerOnTouched(fn) {
  //   this.onTouched = fn
  // }

  // setDisabledState(isDisabled) {
  //   this.isDisabled = isDisabled;
  // }
}
