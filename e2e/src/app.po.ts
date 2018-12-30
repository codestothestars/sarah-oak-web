import { browser, by, element } from 'protractor';

/**
 * The application.
 */
export class App {
  /**
   * Retrieves the title displayed on the page.
   *
   * @returns A promise that resolves with the page title.
   */
  public getTitleText: () => Promise<string> = async () =>
    element(by.css('oak-app h1'))
      .getText()

  /**
   * Navigates to the application's home page.
   *
   * @returns A promise that resolves when the application's home page has loaded.
   */
  public navigateTo: () => Promise<unknown> = async () => browser.get('/');
}
