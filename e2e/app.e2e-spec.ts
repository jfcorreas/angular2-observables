import { Angular2ObservablesPage } from './app.po';

describe('angular2-observables App', () => {
  let page: Angular2ObservablesPage;

  beforeEach(() => {
    page = new Angular2ObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
