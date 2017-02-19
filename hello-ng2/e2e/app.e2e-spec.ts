import { HelloNg2Page } from './app.po';
import { protractor, element, by, browser } from 'protractor';

describe('hello-ng2 App', function () {
  let page: HelloNg2Page;

  beforeEach(() => {
    page = new HelloNg2Page();
  });

  it('should display a form with default values', () => {
    page.navigateTo();
    expect(page.getForm().amount).not.toBeFalsy();
  });

  it('should be able to add an item', () => {
    page.navigateTo();

    page.getForm().amount.sendKeys("10.33");
    page.getForm().description.sendKeys("test item");
    page.getForm().dateOfExpense.sendKeys("12122012");
    page.getForm().submitButton.click();
    expect(element.all(by.css('tbody tr')).count()).toBe(5);
  });
});
