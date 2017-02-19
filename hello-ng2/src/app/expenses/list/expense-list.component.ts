import { Component, OnInit, Input } from '@angular/core';
import { Expense } from '../expense';
@Component({
    moduleId: module.id,
    selector: 'expense-list',
    templateUrl: 'expense-list.component.html',
    styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
    @Input("orderBy") orderByProp : string = "amount";
    @Input() expenses: Expense[];

    constructor() { }

    ngOnInit() { }

    
}