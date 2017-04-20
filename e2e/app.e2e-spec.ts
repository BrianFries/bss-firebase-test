import { BssFirebaseTestPage } from './app.po';

describe('bss-firebase-test App', () => {
  let page: BssFirebaseTestPage;

  beforeEach(() => {
    page = new BssFirebaseTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
