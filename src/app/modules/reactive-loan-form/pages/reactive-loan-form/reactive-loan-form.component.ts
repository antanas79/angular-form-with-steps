import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { QuestionService } from '../../../shared/services/question.service';
import { QuestionControlService } from '../../../shared/services/question-control.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-loan-form',
  templateUrl: './reactive-loan-form.component.html',
  styleUrls: ['./reactive-loan-form.component.scss']
})
export class ReactiveLoanFormComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  stepsForm: FormGroup;
  step1form: FormGroup;
  step2form: FormGroup;
  step3form: FormGroup;
  step4form: FormGroup;
  mockData: any;
  questions: any;

  loaded =false;
  isLinear= true;
  constructor(public _formBuilder: FormBuilder,
      public QuestionControlService: QuestionControlService,
     public questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getLoanStepsWithQuestions()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(res => {
        this.questions = [
          {
            controlType: "textbox",
            key: "income",
            label: "Income",
            options: [],
            order: 1,
            placeholder: "Monthy Income After Taxes (EUR)",
            required: true,
            type: "number",
            value: 69
          },
          {
            controlType: "dropdown",
            key: "reason",
            label: "Loan reason",
            options: [
              {key: "car", value: "Buy car"},
              {key: "phone", value: "Buy phone"},
              {key: "home", value: "Home enhancements"},
              {key: "other", value: "Other"}
            ],
            order: 1,
            placeholder: "Loan reason",
            required: true,
            type: "",
            value: null
          },
          {
            controlType: "dropdown",
            key: "contact",
            label: "Preferred contact method",
            options: [
              {key: "call", value: "Call"},
              {key: "sms", value: "SMS"},
              {key: "email", value: "Email"}  
            ],
            order: 1,
            placeholder: "Preferred contact method",
            required: true,
            type: "",
            value: null,
          },
          {
            controlType: "textbox",
            key: "amount",
            label: "Loan amount",
            options: [],
            order: 3,
            placeholder: "Loan Amount (EUR)",
            required: true,
            type: "",
            value: null
          }
        ]
        console.log(this.questions)

    }, () => {});

    this.stepsForm = this._formBuilder.group({
      steps: this._formBuilder.array([
        this._formBuilder.group({
          income: [null, [Validators.required]],
        }),
        this._formBuilder.group({
          reason: [null, [Validators.required]]
        }),
        this._formBuilder.group({
          contact: [null, [Validators.required]]
        }),
        this._formBuilder.group({
          amount: [null,[Validators.required]]
        })
      ])
    });

    console.log(this.stepsForm)

    this.loaded =true;
    this.onChanges()

  }

  get steps() { return (this.stepsForm.get('steps') as FormArray).controls; }

  onSubmit() {

  }

  onChanges() {
    this.stepsForm.get('steps').valueChanges.subscribe(val => {
      console.log(val)
    });
  }

  onSelectValueChanges(event) {
    console.log(event)
  }

  onInputValueChanges(event) {
    console.log(event)
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
