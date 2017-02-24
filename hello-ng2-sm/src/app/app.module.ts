import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap'
import { AppComponent } from './app.component';
import { ShellComponent } from './shell.component'
import { ExpenseComponent } from './expenses/detail/expense.component';
import { ExpensesModule } from './expenses/expenses.module'
import { CommonModule } from './common/common.module'
import { AppRoutingModule} from './routes.module'

@NgModule({
  declarations: [
    AppComponent,ShellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    Ng2BootstrapModule.forRoot(),
    ExpensesModule, CommonModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'nl-BE'
    }
      ],
  bootstrap: [ShellComponent]
})
export class AppModule { }
