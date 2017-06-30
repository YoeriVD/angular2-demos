import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Expense } from '../expense'

@Injectable()
export class ExpenseService {

    constructor(private http : Http) { }

    getExpenses(){
        return this.http.get('./assets/expenses.json').map(r => r.json());
    }

    getExpense(id : number){
        return this.getExpenses().map(expenses=> expenses.find(e=> e.id === id));
    }
}