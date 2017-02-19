import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'expense-list-sorting',
    templateUrl: 'expense-list-sorting.component.html'
})
export class ExpenseListSortingComponent implements OnInit {
    expenseProps: string[] = [];

    @Input() exampleObject : any = {};
    @Output() sortingChanged = new EventEmitter(); 

    orderByProp : string = "";

    constructor() { }

    ngOnInit() {
        Object.keys(this.exampleObject).sort().forEach(e => this.expenseProps.push(e));
    }

    setSorting(prop: string){
        this.orderByProp = prop;
        this.sortingChanged.emit(prop);
    }


}