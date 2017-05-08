import { Ng4TestPage } from './app.po';

describe('ng4-test App', () => {
  let page: Ng4TestPage;

  beforeEach(() => {
    page = new Ng4TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
