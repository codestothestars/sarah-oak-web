import { by, element } from 'protractor';
import { App } from './app.po';

describe('Sarah Oak website', () => {
  let app: App;

  beforeEach(() => {
    app = new App();
  });

  it('loads', async () => {
    await app.navigateTo();

    await expect(
      element(by.css('oak-app *'))
        .getWebElement()
        .then()
    )
      .toBeTruthy();
  });
});
