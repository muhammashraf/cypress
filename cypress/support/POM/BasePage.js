class BasePage {
  static visit() {
    cy.visit('https://advantageonlineshopping.com/#/');
  }

  static get(selector) {
    return cy.get(selector);
  }

  static click(selector) {
    return this.get(selector).click();
  }

  static type(selector, text) {
    return this.get(selector).type(text);
  }
}

export default BasePage;