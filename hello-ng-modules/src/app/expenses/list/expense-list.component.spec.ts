import { ExpenseListComponent } from './expense-list.component'
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Expense } from './expense'
import { NO_ERRORS_SCHEMA } from '@angular/core'
//import { FormsModule } from '@angular/forms'

describe('ExpenseListComponent', () => {

    let fixture: ComponentFixture<ExpenseListComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExpenseListComponent],
            //imports: [FormsModule]
            schemas : [NO_ERRORS_SCHEMA]
        });
        TestBed.compileComponents();
        fixture = TestBed.createComponent(ExpenseListComponent);
    });

    it('should an empty collection by default', () => {
        let component: ExpenseListComponent = fixture.debugElement.componentInstance;
        expect(component.expenses).toBeTruthy();
    });

    it("should render a row for every element in the expenses collection", () => {
        let component: ExpenseListComponent = fixture.debugElement.componentInstance;
        let nativeElement = fixture.debugElement.nativeElement;

        expect(nativeElement.querySelectorAll('tr').length).toBe(0);
        component.expenses.push(new Expense(new Date(), 'some test title', 55));
        fixture.detectChanges();
        expect(nativeElement.querySelectorAll('tr').length).toBe(1);
    })

});