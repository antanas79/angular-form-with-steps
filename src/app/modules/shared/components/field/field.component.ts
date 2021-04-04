import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent  {
  value: string;
  @Input() question: any;
  onChange(event) {}
  onTouched() {}
  isDisabled: boolean = false;
  control: FormControl;

  constructor(public _formBuilder: FormBuilder) { }

 

}
