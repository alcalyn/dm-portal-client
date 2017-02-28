import { DmPortalClientPage } from './app.po';

describe('dm-portal-client App', () => {
  let page: DmPortalClientPage;

  beforeEach(() => {
    page = new DmPortalClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Articles');
  });
});
