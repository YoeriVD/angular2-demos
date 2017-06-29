import { NgModule } from '@angular/core';

import { ExpenseFormComponent } from './expense-form.component';
import { CommonModule } from '../../common/common.module'

@NgModule({
    imports: [CommonModule],
    exports: [ExpenseFormComponent],
    declarations: [ExpenseFormComponent],
    providers: [],
})
export class ExpenseFormModule { }
