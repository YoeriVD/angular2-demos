import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';

import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { PipesModule } from './common/pipes.module';
import { ExpensesListModule } from './expenses/list/expense-list.module';
import { ExpenseFormModule } from './expenses/form/expense-form.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    PipesModule,
    ExpenseFormModule,
    ExpensesListModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
