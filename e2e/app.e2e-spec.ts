import { NotebookPage } from './app.po';

describe('notebook App', () => {
  let page: NotebookPage;

  beforeEach(() => {
    page = new NotebookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
