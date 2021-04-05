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
            value: 69
          }),
        ]
      }),
        new Step({
          required: true,
          order: 1,
          isEditable: true,
          label: 'Contact Method',
          questions: [
            new DropdownQuestion({
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
            })
          ]
        }),
      new Step({
        required: true,
        order: 2,
        isEditable: true,
        label: 'Contact',
        questions: [
          new TextboxQuestion({
            key: 'contact',
            label: 'Enter your phone',
            placeholder: 'Enter your phone',
            required: true,
            value: null
          })
        ]
      }),
      new Step({
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
            value: null,
            order: 3
          })
        ]
      }),
    ]
    return of(steps.sort((a, b) => a.order - b.order));
  }
}