import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { QuestionService } from '../../../shared/services/question.service';

@Component({
  selector: 'app-reactive-loan-form',
  templateUrl: './reactive-loan-form.component.html',
  styleUrls: ['./reactive-loan-form.component.scss']
})
export class ReactiveLoanFormComponent implements OnInit {
  stepsForm: FormGroup;
  mockData: any;
  constructor(private _formBuilder: FormBuilder, private questionService: QuestionService) { }

  ngOnInit(): void {

    this.stepsForm = this._formBuilder.group({
      steps: this._formBuilder.array([])
    });


  }

}
