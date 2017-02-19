import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExpenseListComponent } from './expense-list.component';
import { ExpenseListSortingComponent } from './expense-list-sorting.component';
import { PipesModule } from '../../common/pipes.module';

@NgModule({
    imports: [PipesModule, BrowserModule],
    exports: [ExpenseListComponent, ExpenseListSortingComponent],
    declarations: [ExpenseListComponent, ExpenseListSortingComponent],
    providers: [],
})
export class ExpensesListModule { }
