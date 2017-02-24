import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailRoutingModule } from './detail/detail-routing.module';

import { CommonModule } from '../common/common.module'
import { ExpenseListComponent } from './list/expense-list.component';
import { ExpenseFormComponent } from './form/expense-form.component'
import { ExpenseComponent } from './detail/expense.component';
import { JsonComponent } from './detail/json.component';
import { StringComponent } from './detail/string.component';

import {ExpenseService} from './expense.service'
@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, DetailRoutingModule],
    exports: [ExpenseListComponent, ExpenseFormComponent, ExpenseComponent, JsonComponent, StringComponent],
    declarations: [ExpenseListComponent, ExpenseFormComponent, ExpenseComponent, JsonComponent, StringComponent ],
    providers: [ExpenseService],
})
export class ExpensesModule { }
