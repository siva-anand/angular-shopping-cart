import { browser, by, element } from 'protractor';

export class ShoppingCardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sc-root h1')).getText();
  }
}
