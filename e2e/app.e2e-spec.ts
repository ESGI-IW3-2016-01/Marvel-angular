import { MarvelAngularPage } from './app.po';

describe('marvel-angular App', () => {
  let page: MarvelAngularPage;

  beforeEach(() => {
    page = new MarvelAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
