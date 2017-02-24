import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { HttpModule } from '@angular/http'
import { ExpenseService } from './expenses/expenses.service'
import { Observable } from 'rxjs/Observable';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ExpenseService]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(AppComponent)
  });

  it("should have an element", inject([ExpenseService], (service: ExpenseService) => {

    // fake result
    let fakeObservable = Observable.from([
      [{ id: 1 }]
    ]);
    expect(service).toBeTruthy();
    // spy on service
    spyOn(service, 'getExpenses').and.returnValue(fakeObservable);

    let component: AppComponent = fixture.debugElement.componentInstance;
    //don't forget to call this!
    component.ngOnInit();
    expect(component.expenses).toBeDefined();
    expect(component.expenses.length).toBe(1);
  }))
});
