import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ExpenseFormComponent } from './expense-form.component';

@NgModule({
    imports: [ReactiveFormsModule],
    exports: [ExpenseFormComponent],
    declarations: [ExpenseFormComponent],
    providers: [],
})
export class ExpenseFormModule { }
