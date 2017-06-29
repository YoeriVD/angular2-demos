
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module'
import { ExpensesModule } from './expenses/expenses.module'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule, ExpensesModule  
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
