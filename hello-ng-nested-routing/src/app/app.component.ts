import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Expense } from './expense'
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Expenses app';
  subtitle = 'Please enter your expenses';
  expenses: Expense[];
  expensesAsync: any;
  showImage = true;
  constructor(private http: Http) {
  }

  ngOnInit() {
    console.log('init')
    this.expensesAsync = this.http.get('./src/expenses.json').map(r => r.json());
    this.expensesAsync.subscribe(e => this.expenses = e);
  }

  addExpenseToList(expense: any) {
    console.log(expense);
    this.expenses.push(expense);
  }
}