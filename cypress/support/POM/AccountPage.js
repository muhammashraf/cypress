import BasePage from './BasePage';

class AccountPage extends BasePage {
  static ordersMenu = '#menuUserLink > .option:nth-child(2)';
  static accountDetails = '#menuUserLink > .option:nth-child(1)';
  static oldPassword = 'input[name="old_password"]';
  static newPassword = 'input[name="new_password"]';
  static confirmPassword = 'input[name="confirm_password"]';
  static saveButton = '#save_btn';

  static viewOrders() {
    this.click(this.ordersMenu);
    return this;
  }

  static updateInfo(details) {
    this.click(this.accountDetails);
    // Implementation for updating account info
    return this;
  }

  static changePassword(oldPass, newPass) {
    this.type(this.oldPassword, oldPass);
    this.type(this.newPassword, newPass);
    this.type(this.confirmPassword, newPass);
    this.click(this.saveButton);
    return this;
  }
}

export default new AccountPage();