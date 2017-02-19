import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Expense } from './expenses/expense'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'Expense account!';
  subtitle = 'Please enter your expenses here';
  img = "./euro.png";
  hideSign = false;
  expenses: Expense[];
  sortBy: string;

  ngOnInit() {
    var vm = this;
    this.expenses = [
      new Expense("lunch", 10, new Date()),
      new Expense("coffee", 4.50, new Date('12/02/2017')),
      new Expense("new mobile phone", 586.99, new Date('02/01/2017')),
      new Expense("new laptop", 2565.60, new Date('01/01/2017')),
    ]

  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }
  changeSorting(propName : string){
    this.sortBy = propName;
  }
  signClicked() {
    this.hideSign = true;
  }

}
