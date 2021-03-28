import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../classes/question-dropdown';  
import { Step } from '../classes/step';
import { TextboxQuestion } from '../classes/question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {
  getLoanStepsWithQuestions() {
    const steps: Step[] = [
      new Step({
        key: 1,
        required: true,
        order: 0,
        isEditable: true,
        label: 'Intro',
        text: 'Press "next" to start applying for a loan.'
      }),
      new Step({
        key: 1,
        required: true,
        order: 0,
        isEditable: true,
        label: 'Income',
        questions: [
          new TextboxQuestion({
            key: 'income',
            label: 'Income',
            placeholder: 'Monthy Income After Taxes (EUR)',
            required: true,
            type: 'number',
          }),
        ]
      }),
      new Step({
        key: 2,
        required: true,
        order: 1,
        isEditable: true,
        label: 'Reason',
        questions: [
          new DropdownQuestion({
            key: 'reason',
            label: 'Loan reason',
            placeholder: 'Loan reason',
            required: true,
            options: [
              {key: 'car',  value: 'Buy car'},
              {key: 'phone',   value: 'Buy phone'},
              {key: 'home',  value: 'Home enhancements'},
              {key: 'other',   value: 'Other'},
            ],
          })
        ]
      }),
      new Step({
        key: 3,
        required: true,
        order: 1,
        isEditable: true,
        label: 'Contact',
        questions: [
          new DropdownQuestion({
            key: 'contact',
            label: 'Preferred contact method',
            placeholder: 'Preferred contact method',
            required: true,
            options: [
              {key: 'call',   value: 'Call'},
              {key: 'sms',   value: 'SMS'},
              {key: 'email',  value: 'Email'},
            ],
          })
        ]
      }),
      new Step({
        key: 4,
        required: true,
        order: 3,
        isEditable: true,
        label: 'Amount',
        questions: [
          new TextboxQuestion({
            key: 'amount',
            label: 'Loan amount',
            placeholder: 'Loan Amount (EUR)',
            required: true,
            options: [
              {key: 'solid',  value: 'Solid'},
              {key: 'great',  value: 'Great'},
              {key: 'good',   value: 'Good'},
              {key: 'unproven', value: 'Unproven'}
            ],
            order: 3
          })
        ]
      }),
      new Step({
        key: 5,
        required: false,
        order: 5,
        label: 'Summary',
        isEditable: true,
        text: 'Please review entered information below before submitting the form.'
      })
    ]
    return of(steps.sort((a, b) => a.order - b.order));
  }
}