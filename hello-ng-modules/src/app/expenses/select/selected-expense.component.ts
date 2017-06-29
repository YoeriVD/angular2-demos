import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Expense } from "../expense";

@Component({
    selector: 'selected-expense',
    template: 'selected expense: {{ selectedExpense.title | lowercase }}'
})
export class SelectedExpenseComponent implements OnInit, OnChanges, DoCheck {
    ngDoCheck(): void {
        //console.log('SelectedExpense: do check was called')
    }
    ngOnChanges(changes: SimpleChanges): void {
        let previous = changes['selectedExpense'].previousValue && changes['selectedExpense'].previousValue.title;
        let current = changes['selectedExpense'].currentValue.title;
        let message = `expense changed from ${previous} to ${current}`
        //console.log(message);
    }
    @Input() selectedExpense: Expense
    constructor() { }

    ngOnInit() {
        //console.log('SelectedExpense initialized!')
    }
}