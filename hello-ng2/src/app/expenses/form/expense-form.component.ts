import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Expense } from '../expense';

@Component({
    moduleId: module.id,
    selector: 'expense-form',
    templateUrl: 'expense-form.component.html'
})
export class ExpenseFormComponent implements OnInit {

    form: FormGroup
    @Output() newExpense = new EventEmitter();

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            description: ['new item', Validators.required],
            dateOfExpense: new Date(),
            amount: 10.99
        });
    }

    ngOnInit() { }

    addExpense() {
        var newExpense: Expense = new Expense(
            this.form.value.description,
            this.form.value.amount,
            new Date(this.form.value.dateOfExpense)
        );
        this.newExpense.emit(newExpense);
        this.form.reset();
    }
}