import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveLoanFormComponent } from './pages/reactive-loan-form/reactive-loan-form.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveLoanFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveLoanFormRoutingModule { }
