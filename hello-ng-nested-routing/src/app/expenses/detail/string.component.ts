import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExpenseService } from '../expense.service';

import { Expense } from '../../expense'

@Component({
    selector: 'expense-string',
    template: `
    <code>
        <pre>{{ expense }}</pre>
    </code>
    `
})
export class StringComponent implements OnInit {
    expense: string;

    constructor(
        private route: ActivatedRoute,
        private expenseService: ExpenseService) { }

    ngOnInit() {
        let id = +this.route.snapshot.parent.params['id'];
        this.expenseService
            .getExpense(id)
            .subscribe(expense => this.expense = expense);
        // this.http
        //     .get('./src/expenses.json')
        //     .map(r => r.json())
        //     .subscribe(expenses => this.expense = expenses.find(e => e.id === id).toString());
    }
}