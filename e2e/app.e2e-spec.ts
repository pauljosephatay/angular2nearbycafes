import { NearbycafesPage } from './app.po';

describe('nearbycafes App', () => {
  let page: NearbycafesPage;

  beforeEach(() => {
    page = new NearbycafesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
