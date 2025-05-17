import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../POM/HomePage';
import RegistrationPage from '../POM/RegistrationPage';
import ProductPage from '../POM/ProductPage';
import CartPage from '../POM/CartPage';
import CheckoutPage from '../POM/CheckoutPage';
import AccountPage from '../POM/AccountPage';


// Shared Steps
Given('I am on the home page', () => {
  HomePage.visit();
});

Given('I am logged in', () => {
  LoginPage.enterCredentials('valid_user', 'ValidPass123').submit();
});

// Registration Steps
When('I open the registration form', () => {
  HomePage.openUserMenu();
  cy.get('#registerPage').click();

});

When('I fill in valid registration details', () => {
  RegistrationPage.fillForm({
    username: `user_${Date.now()}`,
    email: `test_${Date.now()}@example.com`,
    password: 'Test1234'
  });
});

When('I submit the registration form', () => {
  RegistrationPage.submit();
});

Then('I should be registered successfully', () => {
  cy.get('#menuUserLink').should('be.visible');
});

// Login Steps
When('I login with valid credentials', () => {
  LoginPage.enterCredentials('valid_user', 'ValidPass123').submit();
});

When('I login with invalid credentials', () => {
  LoginPage.enterCredentials('invalid', 'wrongpass').submit();
});

Then('I should be logged in', () => {
  cy.get('#menuUserLink').should('contain', 'valid_user');
});

Then('I should see error message', () => {
  cy.get('.loginErrorMessage').should('contain', 'Incorrect user name or password');
});

// Product Steps
When('I search for {string}', (productName) => {
  HomePage.searchProduct(productName);
});

Then('I should see relevant results', () => {
  cy.get('.productName').should('contain', 'Bose');
});

When('I select {string} category', (categoryName) => {
  HomePage.selectCategory(categoryName);
});

Then('I should see {string} products', (category) => {
  cy.get('.categoryTitle').should('contain', category);
});

Given('I am viewing {string} category', (category) => {
  HomePage.selectCategory(category);
});

When('I select {string}', (productName) => {
  cy.contains(productName).click();
});

Then('I should see product details', () => {
  ProductPage.verifyDetails();
});

// Cart Steps
Given('I am viewing a product', () => {
  HomePage.selectCategory('Speakers');
  cy.contains('Bose SoundLink').click();
});

When('I add it to cart', () => {
  ProductPage.addToCart();
});

Then('Cart should update', () => {
  cy.get('.cartQuantity').should('contain', '1');
});

Given('I have items in cart', () => {
  // Setup cart with items
  HomePage.selectCategory('Speakers');
  cy.contains('Bose SoundLink').click();
  ProductPage.addToCart();
});

When('I remove an item', () => {
  CartPage.removeItem();
});

When('I change quantity to {string}', (quantity) => {
  CartPage.updateQuantity(quantity);
});

Then('Total should update', () => {
  cy.get('.totalPrice').should('not.equal', '$0.00');
});

// Checkout Steps
When('I proceed to checkout', () => {
  CartPage.proceedToCheckout();
});

When('fill shipping details', () => {
  CheckoutPage.fillDetails({
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    city: 'Boston',
    state: 'MA',
    postalCode: '02108',
    phone: '5551234567'
  });
});

Then('Order should be placed', () => {
  cy.get('.orderCompleted').should('be.visible');
});

// Account Steps
When('I view order history', () => {
  AccountPage.viewOrders();
});

Then('I should see past orders', () => {
  cy.get('.orderHistoryItem').should('have.length.gt', 0);
});

When('I update my details', () => {
  AccountPage.updateInfo({
    firstName: 'Updated',
    lastName: 'Name'
  });
});

Then('Changes should be saved', () => {
  cy.get('.successMessage').should('be.visible');
});

When('I change password', () => {
  AccountPage.changePassword('oldPass123', 'newPass456');
});

Then('Password should update', () => {
  cy.get('.passwordUpdated').should('be.visible');
});

// UI Verification Steps
Then('All social links should work', () => {
  cy.get('[name="follow_facebook"]').should('have.attr', 'href').and('include', 'facebook');
  cy.get('[name="follow_twitter"]').should('have.attr', 'href').and('include', 'twitter');
});

Given('I view on mobile', () => {
  cy.viewport('iphone-x');
});

Then('Layout should adjust properly', () => {
  cy.get('#mobileMenu').should('be.visible');
});