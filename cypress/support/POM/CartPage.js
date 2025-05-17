import BasePage from './BasePage';


class CartPage extends BasePage {
  static cartIcon = '#menuCart';
  static checkoutButton = '#checkOutButton';
  static removeButton = '.removeProduct';
  static quantityInput = '.cartQuantity input';

  static open() {
    this.click(this.cartIcon);
    return this;
  }

  static removeItem() {
    this.click(this.removeButton);
    return this;
  }

  static updateQuantity(qty) {
    this.get(this.quantityInput).clear().type(qty);
    return this;
  }

  static proceedToCheckout() {
    this.click(this.checkoutButton);
    return this;
  }
}

export default new CartPage();