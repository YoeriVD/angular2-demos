import { Component, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core'
import { Expense } from '../../expense'

@Component({
    selector: 'expense-list',
    templateUrl: './expense-list.component.html',
    styleUrls : ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnChanges, DoCheck {
    @Input() expenses: Expense[] = [];
    @Input() orderByPropName: string;
    constructor() {
    }

    ngDoCheck() {
        //console.log("do check called")
    }
    ngOnChanges(changes) {
        //console.log("on changes called")
    }
}