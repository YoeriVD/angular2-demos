import { Http } from '@angular/http';
import { Injectable, Optional } from '@angular/core';

import { Observable } from 'rxjs'

@Injectable()
export class ExpensesService {

    constructor(private http: Http) { }
    getExpenses() {
        return this.http.get('./src/expenses.json').map(r => r.json());
    }
    getExpense(id: number) {
        return this.getExpenses().map(expenses => expenses.find(e => e.id === id));
    }
}


@Injectable()
export class MockExpensesService {
    constructor(@Optional() private numberOfItems: number) { }
    getExpenses() {
        if (!this.numberOfItems) this.numberOfItems = 2;
        let fakeData = [];
        for (let i = 0; i < this.numberOfItems; i++) {
            fakeData.push({
                id: i + 1,
                description: 'test' + i,
                dateOfExpense: new Date(),
                amount: 9.99 + i
            });
        }
        //create observable (don't forget to import from 'rxjs')
        return Observable.from([
            fakeData
        ]);
    }

    getExpense(id: number) {
        return this.getExpenses().map(expenses => expenses.find(e => e.id === id));
    }
}