import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SummaryComponent } from './components/summary/summary.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { QuestionComponent } from './components/question/question.component';
import { FieldComponent } from './components/field/field.component';

@NgModule({
  declarations: [DynamicFormQuestionComponent, DynamicFormComponent, SummaryComponent, InputComponent, SelectComponent, QuestionComponent, FieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    MatFormFieldModule,
    InputComponent,
    SelectComponent,
    QuestionComponent,
    FieldComponent
  ]
})
export class SharedModule { }
