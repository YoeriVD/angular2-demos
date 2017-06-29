import { NgModule } from '@angular/core';
import { ExpenseListModule } from './list/expense-list.module'
import { ExpenseFormModule } from './form/expense-form.module'
import { SelectedExpenseModule } from './select/selected-expense.module'

@NgModule({
    imports: [ExpenseListModule, ExpenseFormModule, SelectedExpenseModule],
    exports: [ExpenseListModule, ExpenseFormModule, SelectedExpenseModule],
    declarations: [],
    providers: [],
})
export class ExpensesModule { }
