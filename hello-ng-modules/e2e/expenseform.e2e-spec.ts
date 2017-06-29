import { browser, element, by } from 'protractor';

describe('Expense form', () => {
    it('should be able to add an expense', () => {
        
        let formPage = new ExpenseFormPage();
        formPage.goToPage();
        formPage.date.sendKeys('12/12/2012');
        formPage.submit.click();

        expect(formPage.warning.isDisplayed()).toBe(true);

        formPage.title.sendKeys('some test title');
        formPage.amount.sendKeys('500');        
        
        formPage.submit.click();
        expect(formPage.rows.count()).toBe(4);
    })

});

class ExpenseFormPage{
    goToPage(){
        return browser.get('/');
    }
    get date(){
        return element(by.id('date'));
    }
    get title(){
        return element(by.id('title'));
    }
    get amount(){
        return element(by.id('amount'));
    }
    get submit(){
        return element(by.css('input[type="submit"]'));
    }
    get warning(){
        return element(by.css('.alert.alert-danger'));
    }
    get rows(){
        return element.all(by.css('tr'));
    }

}















































// import { browser, by, element } from 'protractor';

// describe('Expense form', () => {

//     beforeEach(() => {
//         browser.get('/');
//     });

//     it('should be able to add an expense', ()=> {

//         var date = element(by.id('date'));
//         var title = element(by.id('title'));
//         var amount = element(by.id('amount'));
//         var submit = element(by.css('input[type="submit"'));
//         var warning = element(by.css('.alert.alert-danger'));

//         date.sendKeys('12/12/2012');
//         title.sendKeys('some test title');

//         submit.click();
//         expect(warning.isDisplayed()).toBe(true);

//         amount.sendKeys('500');

//         var submit = element(by.css('input[type="submit"'));
//         submit.click();

//         var rows = element.all(by.css('tr'));
//         expect(rows.count()).toBe(4);

//     })

// })