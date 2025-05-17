import BasePage from './BasePage';

class CheckoutPage extends BasePage {
  static firstName = 'input[name="first_name"]';
  static lastName = 'input[name="last_name"]';
  static address = 'input[name="address"]';
  static city = 'input[name="city"]';
  static state = 'input[name="state"]';
  static postalCode = 'input[name="postal_code"]';
  static phone = 'input[name="phone_number"]';
  static nextButton = '#next_btn';

  static fillDetails(user) {
    this.type(this.firstName, user.firstName);
    this.type(this.lastName, user.lastName);
    this.type(this.address, user.address);
    this.type(this.city, user.city);
    this.type(this.state, user.state);
    this.type(this.postalCode, user.postalCode);
    this.type(this.phone, user.phone);
    return this;
  }

  static placeOrder() {
    this.click(this.nextButton);
    return this;
  }
}

export default new CheckoutPage();