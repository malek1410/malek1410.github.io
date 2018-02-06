import { MyProjPage } from './app.po';

describe('my-proj App', function() {
  let page: MyProjPage;

  beforeEach(() => {
    page = new MyProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
