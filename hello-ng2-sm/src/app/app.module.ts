import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap'
import { AppComponent } from './app.component';
import { ShellComponent } from './shell.component'
import { ExpenseComponent } from './expenses/detail/expense.component';
import { ExpensesModule } from './expenses/expenses.module'
import { CommonModule } from './common/common.module'

import { RouterModule, Route } from '@angular/router'

import { CustomHttpService } from './common/http.service'

function customHttpServiceFactory(backend: XHRBackend, options: RequestOptions) {
  return new CustomHttpService(backend, options);
}


const ROUTES: Route[] = [
  { path: '', component: AppComponent },
  { path: 'detail/:id', component: ExpenseComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,ShellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    ExpensesModule, CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'nl-BE'
    },
    { provide: Http, useFactory: customHttpServiceFactory, deps: [XHRBackend, RequestOptions] }
  ],
  bootstrap: [ShellComponent]
})
export class AppModule { }
