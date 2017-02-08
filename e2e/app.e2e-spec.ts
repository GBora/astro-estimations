import { AstroEstimationPage } from './app.po';

describe('astro-estimation App', function() {
  let page: AstroEstimationPage;

  beforeEach(() => {
    page = new AstroEstimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
