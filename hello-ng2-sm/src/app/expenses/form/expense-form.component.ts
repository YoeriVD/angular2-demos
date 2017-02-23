import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Expense } from '../../expense'

@Component({
    selector: 'expense-form',
    templateUrl: './expense-form.component.html',
    styleUrls : ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
    newExpenseForm: FormGroup;
    dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

    @Output() newExpense = new EventEmitter();

    constructor() { }

    ngOnInit() {
        this.newExpenseForm = new FormGroup({
            description: new FormControl('description', [Validators.required, Validators.maxLength(10)]),
            amount: new FormControl(10.53),
            dateOfExpense: new FormControl('01/01/2017', Validators.pattern(this.dateRegex)),
        });
    }

    addExpense() {
        this.newExpense.emit(
            new Expense(
                this.newExpenseForm.value.description,
                new Date(this.newExpenseForm.value.dateOfExpense),
                this.newExpenseForm.value.amount)
        );
        this.newExpenseForm.reset();
    }
}