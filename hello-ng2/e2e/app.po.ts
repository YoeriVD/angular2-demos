import { browser, element, by } from 'protractor';

export class HelloNg2Page {
  navigateTo() {
    return browser.get('/');
  }
  getListOfExpenses = () => element.all(by.css('li')).map(el => ({
    id: el.findElements('td')[0].getText(),
    description: el.findElements('td')[1].getText(),
    dateOfExpense: el.findElements('td')[2].getText(),
    amount: el.findElements('td')[3].getText()
  }));

  getForm = () => {
    const form = {
      description: element(by.id('description')),
      amount: element(by.id('amount')),
      dateOfExpense: element(by.id('dateOfExpense')),
      submitButton: element(by.id('submit')),
    };
    return form;
  };
}
