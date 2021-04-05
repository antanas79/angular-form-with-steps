import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { QuestionService } from '../../../shared/services/question.service';
import { QuestionControlService } from '../../../shared/services/question-control.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-loan-form-reactive',
  templateUrl: './loan-form-reactive.component.html',
  styleUrls: ['./loan-form-reactive.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  },
  QuestionService,
  QuestionControlService
]
})
export class LoanFormReactiveComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();
  stepsForm: FormGroup;
  showError = false;
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
          key: 'contactMethod',
          label: 'Contact method',
          placeholder: 'Contact method',
          required: true,
          options: [
            {key: 'phone',  value: 'Phone call'},
            {key: 'email',   value: 'Email'},
            {key: 'sms',  value: 'SMS'},
          ],
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
    }, () => {});

    this.stepsForm = this._formBuilder.group({
      steps: this._formBuilder.array([
        this._formBuilder.group({
          income: [null, [Validators.required]],
        }),
        this._formBuilder.group({
          contactMethod: [null, [Validators.required]]
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

    this.loaded = true;
    this.onChanges();

  }

  // get steps() { return (this.stepsForm.get('steps') as FormArray).controls; }

  onSubmit() {

  }

  // checkErrors(i: number) {
  //   if ((this.stepsForm.get('steps') as FormArray).controls[i].get('income').errors) {
  //     this.showError = true;
  //   } else {
  //     this.showError = false;
  //   }
  //   console.log((this.stepsForm.get('steps') as FormArray).controls[0].get('income').errors)
  // }

  onChanges() {
    this.stepsForm.get('steps').valueChanges.subscribe(val => {
      console.log(this.stepsForm.get('steps').value)
    });
  }

  // onSelectValueChanges(event) {
  //   console.log(event)
  // }

  // onInputValueChanges(event) {
  //   console.log(event)
  // }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
