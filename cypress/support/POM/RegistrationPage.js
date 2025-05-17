import BasePage from './BasePage';


class RegistrationPage extends BasePage {
  static usernameField = 'input[name="usernameRegisterPage"]';
  static emailField = 'input[name="emailRegisterPage"]';
  static passwordField = 'input[name="passwordRegisterPage"]';
  static confirmPasswordField = 'input[name="confirm_passwordRegisterPage"]';
  static registerButton = '#register_btnundefined';

  static fillForm(user) {
    this.type(this.usernameField, user.username);
    this.type(this.emailField, user.email);
    this.type(this.passwordField, user.password);
    this.type(this.confirmPasswordField, user.password);
    return this;
  }

  static submit() {
    this.click(this.registerButton);
    return this;
  }
}

export default new RegistrationPage();