import { browser } from 'protractor';

/**
 * The application.
 */
export class App {
  /**
   * Navigates to the application's home page.
   *
   * @returns A promise that resolves when the application's home page has loaded.
   */
  public navigateTo: () => Promise<unknown> = async () => browser.get('/');
}
