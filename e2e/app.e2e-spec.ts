import { TecholutionPage } from './app.po';

describe('techolution App', () => {
  let page: TecholutionPage;

  beforeEach(() => {
    page = new TecholutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
