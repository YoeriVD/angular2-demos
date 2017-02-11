import { HelloNg2Page } from './app.po';

describe('hello-ng2 App', function() {
  let page: HelloNg2Page;

  beforeEach(() => {
    page = new HelloNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
