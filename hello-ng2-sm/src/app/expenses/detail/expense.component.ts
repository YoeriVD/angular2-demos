import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'

import { ExpenseService } from '../expenses.service'

@Component({
    selector: 'expense',
    templateUrl: './expense.component.html'
})
export class ExpenseComponent implements OnInit {

    expense = {}

    constructor(private route: ActivatedRoute, private service: ExpenseService) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            let id = +params['id'];
            this.service.getExpense(id).subscribe(exp => this.expense = exp);
        });
    }
}