import { Component, OnInit, SkipSelf } from '@angular/core';
import { Http } from '@angular/http';
import { Expense } from './expense'
import 'rxjs/add/operator/catch';


import { ExpenseService, MockExpensesService } from './expenses/expenses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Expenses app';
  subtitle = 'Please enter your expenses';
  expenses: Expense[];
  expensesAsync: any;
  showImage = true;
  constructor(private expenseService: ExpenseService) {

  }
 
  ngOnInit() {
    this.expensesAsync = this.expenseService.getExpenses();
    this.expensesAsync.subscribe(expenses => this.expenses = expenses);


  }

  addExpenseToList(expense: any) {
    this.expenses.push(expense);
  }



}








    // this.expenses = [
    //   new Expense("train ticket", new Date(), 18.20),
    //   new Expense("lunch", new Date(2017, 1, 1), 10.20),
    //   new Expense("parking ticket", new Date(2017, 2, 3), 5.23),
    //   new Expense("new laptop", new Date(2016, 12, 14), 2354.20),
    // ];


// WEBPACK FOOTER //
// ./src/app/app.component.ts


// WEBPACK FOOTER //
// ./src/app/app.component.ts


// WEBPACK FOOTER //
// ./src/app/app.component.ts