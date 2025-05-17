import BasePage from './BasePage';

class HomePage extends BasePage {
  static userIcon = '#menuUser';
  static searchField = '#search';
  static categoryLink = (name) => `a[href*="${name.toLowerCase()}"]`;

  visit() {
    cy.visit('https://advantageonlineshopping.com/#/', {timeout: 10000});
  }

  static openUserMenu() {
    this.click(this.userIcon);
    return this;
  }

  static searchProduct(productName) {
    this.type(this.searchField, `${productName}{enter}`);
    return this;
  }

  static selectCategory(categoryName) {
    this.click(this.categoryLink(categoryName));
    return this;
  }
}

export default new HomePage();