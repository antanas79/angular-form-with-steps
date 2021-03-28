import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanFormComponent } from './pages/loan-form/loan-form.component';


const routes: Routes = [
  {
    path: '',
    component: LoanFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanFormRoutingModule { }
