import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap'
import { AppComponent } from './app.component';
import {ExpensesModule} from './expenses/expenses.module'
import { CommonModule} from './common/common.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    ExpensesModule, CommonModule
  ],
  providers: [
    { 
      provide : LOCALE_ID,
      useValue: 'nl-BE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
