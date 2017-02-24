import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { AppComponent } from '../app.component'
import { ExpenseComponent } from '../expenses/detail/expense.component'

export const ROUTES: Route[] = [
    { path: '', component: AppComponent },
    //{ path: 'expense/:id', component: ExpenseComponent },
    { path: '**', redirectTo: '' }
]
@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
