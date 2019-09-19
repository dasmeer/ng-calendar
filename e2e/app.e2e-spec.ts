import { Try1Page } from './app.po';

describe('try1 App', function() {
  let page: Try1Page;

  beforeEach(() => {
    page = new Try1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
