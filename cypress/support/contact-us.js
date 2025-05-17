import HomePage from '../pages/HomePage';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

// 1. User Registration Command
Cypress.Commands.add('registerUser', (userData) => {
  HomePage.visit();
  HomePage.openUserMenu();
  cy.get('#registerPage').click();
  RegistrationPage.fillForm(userData).submit();
});

// 2. Login Command
Cypress.Commands.add('login', (username, password) => {
  HomePage.visit();
  HomePage.openUserMenu();
  LoginPage.enterCredentials(username, password).submit();
});

// 3. Product Search Command
Cypress.Commands.add('searchProduct', (productName) => {
  HomePage.visit();
  HomePage.searchProduct(productName);
});

// 4. Add to Cart Command
Cypress.Commands.add('addToCart', (productName) => {
  cy.contains(productName).click();
  ProductPage.addToCart();
});

// 5. Cart Operations Command
Cypress.Commands.add('manageCart', (action, data = {}) => {
  CartPage.open();
  switch(action) {
    case 'updateQuantity':
      CartPage.updateQuantity(data.quantity);
      break;
    case 'removeItem':
      CartPage.removeItem();
      break;
    case 'proceedToCheckout':
      CartPage.proceedToCheckout();
      break;
    default:
      throw new Error(`Unknown cart action: ${action}`);
  }
});

// 6. Checkout Command
Cypress.Commands.add('completeCheckout', (userDetails) => {
  CheckoutPage.fillDetails(userDetails).placeOrder();
});

// 7. Account Commands
Cypress.Commands.add('manageAccount', (action, data = {}) => {
  switch(action) {
    case 'viewOrders':
      AccountPage.viewOrders();
      break;
    case 'updateInfo':
      AccountPage.updateInfo(data);
      break;
    case 'changePassword':
      AccountPage.changePassword(data.oldPassword, data.newPassword);
      break;
    default:
      throw new Error(`Unknown account action: ${action}`);
  }
});

// 8. UI Validation Command
Cypress.Commands.add('verifyUI', (element, validation) => {
  switch(validation) {
    case 'socialLinks':
      cy.get(element).should('have.attr', 'href').and('include', 'facebook.com');
      break;
    case 'responsive':
      cy.viewport('iphone-x');
      cy.get(element).should('be.visible');
      break;
    default:
      throw new Error(`Unknown UI validation: ${validation}`);
  }
});