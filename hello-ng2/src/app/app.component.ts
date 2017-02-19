import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Expense } from './expense'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent implements OnInit {
  title = 'Expense account!';
  subtitle = 'Please enter your expenses here';
  img = "./euro.png";
  hideSign = false;
  expenseProps: string[] = [];
  orderByProp = "amount"
  form: FormGroup;
  expenses: Expense[];

  ngOnInit() {
    var vm = this;
    this.expenses = [
      new Expense("lunch", 10, new Date()),
      new Expense("coffee", 4.50, new Date('12/02/2017')),
      new Expense("new mobile phone", 586.99, new Date('02/01/2017')),
      new Expense("new laptop", 2565.60, new Date('01/01/2017')),
    ]
    Object.keys(this.expenses[0]).sort().forEach(e => this.expenseProps.push(e));
  }

  constructor(private ref: ChangeDetectorRef, private fb: FormBuilder, private datePipe: DatePipe) {
    // this.form = new FormGroup({
    //   description: new FormControl(),
    //   dateOfExpense: new FormControl(),
    //   amount: new FormControl()
    // })
    this.form = this.fb.group({
      description: ['new item', Validators.required],
      dateOfExpense: new Date(),
      amount: 10.99
    });
  }

  addExpense() {
    console.log("submitting", this.form.value);
    var newExpense: Expense = new Expense(
      this.form.value.description,
      this.form.value.amount,
      new Date(this.form.value.dateOfExpense)
    );
    this.expenses.push(newExpense);
    this.form.reset();
  }

  updateSorting() {
    this.ref.detectChanges();
  }

  signClicked() {
    this.hideSign = true;
  }

}
