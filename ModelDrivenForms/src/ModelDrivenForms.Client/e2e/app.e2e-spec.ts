import { ModelDrivenFormsPage } from './app.po';

describe('model-driven-forms App', function() {
  let page: ModelDrivenFormsPage;

  beforeEach(() => {
    page = new ModelDrivenFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
