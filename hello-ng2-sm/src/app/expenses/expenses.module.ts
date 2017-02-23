import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '../common/common.module'
import { ExpenseListComponent } from './list/expense-list.component';
import {ExpenseFormComponent} from './form/expense-form.component'

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
    exports: [ExpenseListComponent, ExpenseFormComponent],
    declarations: [ExpenseListComponent, ExpenseFormComponent],
    providers: [],
})
export class ExpensesModule { }
