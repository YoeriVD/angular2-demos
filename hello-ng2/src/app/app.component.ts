import { Component, ChangeDetectorRef } from '@angular/core';
import { Expense } from './expense'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Expense account!';
  subtitle = 'Please enter your expenses here';
  img = "./euro.png";
  hideSign = false;
  expenseProps = Object.keys(new Expense(null, null, null)).sort();
  orderByProp = "amount"

  expenses: Expense[] = [
    new Expense("lunch", 10, new Date()),
    new Expense("coffee", 4.50, new Date('12/02/2017')),
    new Expense("new mobile phone", 586.99, new Date('02/01/2017')),
    new Expense("new laptop", 2565.60, new Date('01/01/2017')),
  ]

  constructor(private ref: ChangeDetectorRef) {
  }
  updateSorting(){
    this.ref.detectChanges();
  }

  signClicked() {
    this.hideSign = true;
  }

}
