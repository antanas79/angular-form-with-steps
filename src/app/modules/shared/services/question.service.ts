import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../classes/question-dropdown';
import { QuestionBase } from '../classes/question-base';
import { Step } from '../classes/step';
import { TextboxQuestion } from '../classes/question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {
  getLoanStepsWithQuestions() {
    const steps: Step[] = [
      new Step({
        key: 0,
        required: true,
        order: 0,
        isEditable: true,
        questions: [
          new DropdownQuestion({
            key: 'brave',
            label: 'Bravery Rating',
            placeholder: 'EUR',
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
        key: 1,
        required: true,
        order: 1,
        isEditable: true,
        questions: [
          new DropdownQuestion({
            key: 'brave',
            label: 'Bravery Rating',
            placeholder: 'EUR',
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
        key: 2,
        required: true,
        order: 2,
        isEditable: true,
        questions: [
          new DropdownQuestion({
            key: 'brave',
            label: 'Bravery Rating',
            placeholder: 'EUR',
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
        key: 3,
        required: true,
        order: 3,
        isEditable: true,
        questions: [
          new DropdownQuestion({
            key: 'brave',
            label: 'Bravery Rating',
            placeholder: 'EUR',
            options: [
              {key: 'solid',  value: 'Solid'},
              {key: 'great',  value: 'Great'},
              {key: 'good',   value: 'Good'},
              {key: 'unproven', value: 'Unproven'}
            ],
            order: 3
          })
        ]
      })
    ]
    return of(steps.sort((a, b) => a.order - b.order));
  }
  
  getLoanQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        placeholder: 'EUR',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        placeholder: 'EUR',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        placeholder: 'EUR',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}