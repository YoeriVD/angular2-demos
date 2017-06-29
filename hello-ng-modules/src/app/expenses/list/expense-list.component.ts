import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Expense } from "../expense";

@Component({
    selector: 'expense-list',
    templateUrl: 'expense-list.component.html'
})
export class ExpenseListComponent implements OnInit {
    @Input() expenses: Expense[] = []
    @Output() expenseSelected = new EventEmitter<Expense>();
    constructor() { }

    ngOnInit() { }


    hide(expense: Expense) {
        expense.hidden = true;
    }
}