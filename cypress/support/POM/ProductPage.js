import BasePage from './BasePage';

class ProductPage extends BasePage {
  static productName = '.productName';
  static addToCartButton = '.addToCartButton';
  static productPrice = '.productPrice';

  static verifyDetails() {
    this.get(this.productName).should('be.visible');
    this.get(this.productPrice).should('contain', '$');
    return this;
  }

  static addToCart() {
    this.click(this.addToCartButton);
    return this;
  }
}

export default new ProductPage();