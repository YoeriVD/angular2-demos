import { ExpenseListComponent } from './expense-list.component'
import { CommonModule } from '../../common/common.module'
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe("list-component", () => {
    
    let fixture: ComponentFixture<ExpenseListComponent>
    beforeEach(() => {
        //create a 'dummy' module used testing only
        TestBed.configureTestingModule({
            declarations: [ExpenseListComponent],
            imports: [CommonModule],
            schemas: [NO_ERRORS_SCHEMA] //ignore child components
        });
        //compile everything
        TestBed.compileComponents();
        //create a fixture, this helps us manage change detection, get native element,...
        fixture = TestBed.createComponent(ExpenseListComponent);
    });

    it("should have an empty collection by default", () => {
        let component: ExpenseListComponent = fixture.debugElement.componentInstance; //gives us our class instance
        expect(component.expenses).toBeTruthy();
    })
    it("should render a row for every expense", () => {
        let component: ExpenseListComponent = fixture.debugElement.componentInstance;
        let nativeElement = fixture.debugElement.nativeElement; //gives us the HTML element
        expect(nativeElement.querySelectorAll('tbody tr').length).toBe(0);
        component.expenses.push({ id: 1, amount: 10, dateOfExpense: new Date(), description: "test" })
        fixture.detectChanges(); // in tests, we manually detect changes
        expect(nativeElement.querySelectorAll('tbody tr').length).toBe(1);      
    })
});

































// import { TestBed, ComponentFixture } from '@angular/core/testing'
// import { ExpenseListComponent } from './expense-list.component' 
// import { CommonModule } from '../../common/common.module'


// describe("expense-list component", ()=>{

//     let fixture : ComponentFixture<ExpenseListComponent>;

//     beforeEach(()=>{
//         TestBed.configureTestingModule({
//             imports :  [CommonModule],
//             declarations : [ExpenseListComponent],
//         });
//         TestBed.compileComponents();
//         fixture = TestBed.createComponent(ExpenseListComponent); 
//     });


//     it("should have an empty collection by default", ()=>{
//         let component : ExpenseListComponent = fixture.debugElement.componentInstance;
//         expect(component.expenses).toBeTruthy();
//     })

//     it("should render a tr for every element", ()=>{
//         let nativeElement = fixture.debugElement.nativeElement;
//         expect(nativeElement.querySelectorAll('tbody tr').length).toBe(0);
//         let component : ExpenseListComponent = fixture.debugElement.componentInstance;
//         component.expenses.push({id:1, amount: 10, dateOfExpense: new Date(), description:"test"});
//         fixture.detectChanges();
//         expect(nativeElement.querySelectorAll('tbody tr').length).toBe(1);        
//     })


// });