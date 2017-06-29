import { NgModule } from '@angular/core';

import { SelectedExpenseComponent } from './selected-expense.component';
import { CommonModule } from '../../common/common.module'
@NgModule({
    imports: [CommonModule],
    exports: [SelectedExpenseComponent],
    declarations: [SelectedExpenseComponent],
    providers: [],
})
export class SelectedExpenseModule { }
