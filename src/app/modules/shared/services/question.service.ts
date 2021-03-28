import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../classes/question-dropdown';
import { QuestionBase } from '../classes/question-base';
import { TextboxQuestion } from '../classes/question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {
  
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