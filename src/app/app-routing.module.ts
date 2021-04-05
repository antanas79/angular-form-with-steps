import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/loan-form/loan-form.module').then(m => m.LoanFormModule),
    data: {
        title: 'Form page',
    },
  },
  {
    path: 'loan-form',
    loadChildren: () => import('./modules/loan-form-reactive/loan-form-reactive.module').then(m => m.LoanFormReactiveModule),
    data: {
        title: 'Form page',
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
