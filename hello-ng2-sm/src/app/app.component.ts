import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Expense } from './expense'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Expenses app';
  subtitle = 'Please enter your expenses';
  expenses: Expense[];
  showImage = true;
  constructor(private http: Http) {
  }

  ngOnInit() {
    this.expenses = [
      new Expense("train ticket", new Date(), 18.20),
      new Expense("lunch", new Date(2017, 1, 1), 10.20),
      new Expense("parking ticket", new Date(2017, 2, 3), 5.23),
      new Expense("new laptop", new Date(2016, 12, 14), 2354.20),
    ];

  }

  addExpenseToList(expense: any) {
    console.log(expense);
    this.expenses.push(expense);
  }



}



 // this.newExpenseForm = new FormGroup({
    //   description: new FormControl('description', Validators.required),
    //   amount: new FormControl(10.53),
    //   dateOfExpense: new FormControl('01/01/2017', Validators.pattern(this.dateRegex))
    // })


    //this.http.get('./src/expenses.json').map(r => r.json()).subscribe(exp=> this.expenses = exp);