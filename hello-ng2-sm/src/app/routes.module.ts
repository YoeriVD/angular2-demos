import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'

import { AppComponent } from './app.component';
import { ExpenseComponent } from './expenses/detail/expense.component';
import { IdExistsGuard } from './expenses/id-exists-guard.service'


const ROUTES: Route[] = [
  { path: '', component: AppComponent },
  { path: 'detail/:id', component: ExpenseComponent, canActivate: [IdExistsGuard] },
  { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [RouterModule],
    declarations: [],
    providers: [IdExistsGuard],
})
export class AppRoutingModule { }
