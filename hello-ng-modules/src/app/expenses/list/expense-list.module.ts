import { NgModule } from '@angular/core';

import { ExpenseListComponent } from './expense-list.component';
import { CommonModule } from '../../common/common.module'

@NgModule({
    imports: [CommonModule],
    exports: [ExpenseListComponent],
    declarations: [ExpenseListComponent],
    providers: [],
})
export class ExpenseListModule { }
