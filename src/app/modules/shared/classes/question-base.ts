export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    placeholder: string;
    order: number;
    controlType: string;
    type: string;
    options: {key: string, value: string}[];
  
    constructor(options: {
        value?: T;
        key?: string;
        placeholder?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        options?: {key: string, value: string}[];
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.placeholder = options.placeholder || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options || [];
    }
  }