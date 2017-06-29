import { Component } from '@angular/core';
import { Expense } from "./expenses/expense";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Expenses';
  expenses: Expense[];
  selectedExpense: Expense;
  showWarning = false;
  constructor() {
    this.expenses = [
      new Expense(new Date(2017, 5, 6), 'Laptop', 2000),
      new Expense(new Date(2016, 2, 16), 'Phone', 500),
      new Expense(new Date(2017, 3, 5), 'Lunch', 20),
    ]
  }

  addExpenseToList(expense : Expense){
    console.log("expense received in the AppComponent", expense);
    this.expenses.push(expense);
  }


}


