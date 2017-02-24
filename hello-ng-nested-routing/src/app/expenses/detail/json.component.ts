import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExpenseService } from '../expense.service';
import { Expense } from '../../expense'

@Component({
    selector: 'expense-json',
    template: `
    <code>
        <pre>{{expense | json }}</pre>
    </code>
    `
})
export class JsonComponent implements OnInit {
    expense: Expense;

    constructor(
        private route: ActivatedRoute,
        private expenseService: ExpenseService) { }

    ngOnInit() {
        let id = +this.route.snapshot.parent.params['id'];;
        this.expenseService
            .getExpense(id)
            .subscribe(expense => this.expense = expense);
    }
}