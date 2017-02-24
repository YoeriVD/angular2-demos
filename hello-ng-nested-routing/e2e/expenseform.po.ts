import { element, browser, by } from 'protractor'
export class ExpenseForm{
    navigateTo(){
        return browser.get('/');
    }
    get description() {
        return element(by.id("description"))
    }    
    get amount() {
        return element(by.id("amount"))
    }    
    get dateOfExpense() {
        return element(by.id("dateOfExpense"))
    }
    get submitButton(){
        return element(by.id("submit"))
    }
    get list(){
        return element.all(by.css("tbody tr"))
    }
}