import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms"
import { Expense } from "../expense"

@Component({
    selector: 'expense-form',
    templateUrl: 'expense-form.component.html'
})

export class ExpenseFormComponent implements OnInit {
    atLeastTen = (control: AbstractControl) => control.value > 10 ? null : { 'atLeastTen': true };
    showWarning = false;
    expenseForm = new FormGroup({
        date: new FormControl(),
        title: new FormControl('', [Validators.required]),
        amount: new FormControl('', [this.atLeastTen])
    });

    @Output() newExpense = new EventEmitter<Expense>();

    constructor() { }

    ngOnInit() { 


      console.log('form initialized!')
    }

    addExpense() {
    if (this.expenseForm.invalid) {
      this.showWarning = true;
    } else {
      this.showWarning = false;
      console.log("emitting new expense from the FormComponent", this.expenseForm.value);
      this.newExpense.emit(this.expenseForm.value)
      this.expenseForm.reset();
    }
  }
}