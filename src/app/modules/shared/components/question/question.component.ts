import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit  {
  @Input() question: any = {};
  @Input() form: FormGroup;
  @Input() formGroupNameNumber: number;
  @Input() formArrayNameString: string;
  @Input() group: any;
  @Input() showError: boolean;
  @Output() onInputValueChanges = new EventEmitter<string>();
  value: string;
  onChange(event) {}
  onTouched() {}
  isDisabled: boolean = false;
  control: FormControl;
  
  
  constructor() { }

  get questionControls () {
    return
  }

  get questionConrols() { return (this.form.get(this.formArrayNameString) as FormArray).controls; }

  ngOnInit() {

    console.log(this.group)
  }
}
