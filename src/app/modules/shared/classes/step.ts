import { QuestionBase } from './question-base';

export class Step {
    key: number;
    required: boolean;
    order: number;
    isEditable: boolean;
    questions: QuestionBase<string>[];
  
    constructor(options: {
        key?: number;
        required?: boolean;
        order?: number;
        isEditable?: boolean;
        questions?: QuestionBase<string>[]; 
      } = {}) {
    this.key = options.key;
      this.required = !!options.required ;
      this.order = options.order === undefined ? 1 : options.order;
      this.isEditable = options.isEditable;
      this.questions = options.questions;
    }
  }