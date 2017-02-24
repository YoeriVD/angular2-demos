import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '../common/common.module'
import { ExpenseListComponent } from './list/expense-list.component';
import { ExpenseFormComponent } from './form/expense-form.component'
import { ExpenseComponent } from './detail/expense.component';
import { ExpensesService, MockExpensesService } from './expenses.service';

import { RouterModule } from '@angular/router';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
    exports: [ExpenseListComponent, ExpenseFormComponent, ExpenseComponent],
    declarations: [ExpenseListComponent, ExpenseFormComponent, ExpenseComponent],
    providers: [ExpensesService],
})
export class ExpensesModule { }
