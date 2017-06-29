import { ExpenseFormComponent } from './expense-form.component';
import { Expense } from './expense';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
describe("ExpenseFormComponent", () => {
    let fixture: ComponentFixture<ExpenseFormComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExpenseFormComponent],
            imports: [ReactiveFormsModule],
            schemas : [NO_ERRORS_SCHEMA],
        });
        TestBed.compileComponents();
        fixture = TestBed.createComponent(ExpenseFormComponent);
    })
    it('should show a warning if the form is invalid', () => {
        let nativeElement = fixture.debugElement.nativeElement;
        let component: ExpenseFormComponent = fixture.debugElement.componentInstance;
        component.addExpense();
        expect(component.showWarning).toBeTruthy();
    })
    it('should emit a new expense when the form is valid', () => {
        let component: ExpenseFormComponent = fixture.debugElement.componentInstance;
        component.expenseForm.get('date').setValue('12/12/2012');
        component.expenseForm.get('title').setValue('test');
        component.expenseForm.get('amount').setValue('55');
        spyOn(component.newExpense, 'emit');

        component.addExpense();
        expect(component.showWarning).toBeFalsy();
        expect(component.newExpense.emit).toHaveBeenCalled();
    })

});