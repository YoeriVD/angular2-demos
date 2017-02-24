import { browser, element, by } from 'protractor';
import { ExpenseForm } from './expenseform.po'

describe("Expense form", ()=>{

    let po : ExpenseForm;

    beforeEach(() => {
        po = new ExpenseForm();
        po.navigateTo();
    })

    it("should be able to add an expense to the list", () => {
               
        expect(po.list.count()).toBe(4);
        po.description.clear();
        po.description.sendKeys("some item");

        po.amount.clear();
        po.amount.sendKeys("11.53");

        po.dateOfExpense.clear();
        po.dateOfExpense.sendKeys("03/03/2017");

        po.submitButton.click();
        expect(po.list.count()).toBe(5);
    });

});






























// import { browser, element, by } from 'protractor';
// import { ExpenseForm } from './expenseform.po'
// describe("Add expense form", () => {
//   let po : ExpenseForm;
//   beforeEach(() => browser.get('/'))
//   beforeEach(() => {
//     po = new ExpenseForm();
//     po.navigateTo();
//   })
//   it("bla", () => {
//     expect(po.list.count()).toBe(4);
//     po.description.clear();
//     po.description.sendKeys("bla");
//     po.dateOfExpense.clear();
//     po.dateOfExpense.sendKeys("03/03/2017");
//     po.amount.clear();
//     po.amount.sendKeys("15.15");
//     po.submitButton.click();
//     expect(po.list.count()).toBe(5);
//   });

//   it("should be able to add an expense", () => {
//     let descriptionText = element(by.id("description"));
//     let amountText = element(by.id("amount"));
//     let dateOfExpenseText = element(by.id("dateOfExpense"));
//     let submitButton = element(by.id("submit"))

//     expect(element.all(by.css('tbody tr')).count()).toBe(4)

//     descriptionText.clear();
//     descriptionText.sendKeys("some text");
//     amountText.clear();
//     amountText.sendKeys("11.50");
//     dateOfExpenseText.clear();
//     dateOfExpenseText.sendKeys("02/02/2017");

//     submitButton.click();
//     expect(element.all(by.css('tbody tr')).count()).toBe(5)

//   });

// });
























// // xdescribe('hello-ng App', () => {
// //   let page: HelloNgPage;

// //   beforeEach(() => {
// //     page = new HelloNgPage();
// //   });

// //   it('should display message saying app works', () => {
// //     page.navigateTo();
// //     expect(page.getParagraphText()).toEqual('app works!');
// //   });
// // });
