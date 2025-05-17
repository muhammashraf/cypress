describe('Advantage Online Shopping - Complete Test Suite', () => {
  const testUser = {
    username: `testuser_${Date.now()}`,
    email: `test_${Date.now()}@example.com`,
    password: 'Test1234',
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    city: 'Boston',
    state: 'MA',
    postalCode: '02108',
    phone: '5551234567'
  };

  const productName = 'Bose SoundLink Bluetooth Speaker';

  // 1. Registration Test
  describe('User Registration', () => {
    it('should register a new user successfully', () => {
      cy.registerUser(testUser);
      cy.get('#menuUserLink').should('contain', testUser.username);
    });
  });

  // 2. Login Tests
  describe('User Authentication', () => {
    it('should login with valid credentials', () => {
      cy.login(testUser.username, testUser.password);
      cy.get('#menuUserLink').should('contain', testUser.username);
    });

    it('should show error for invalid credentials', () => {
      cy.login('invalid', 'wrongpass');
      cy.get('.loginErrorMessage').should('be.visible');
    });
  });

  // 3. Product Tests
  describe('Product Operations', () => {
    it('should search for products', () => {
      cy.searchProduct(productName);
      cy.get('.productName').should('contain', productName);
    });

    it('should add product to cart', () => {
      cy.searchProduct(productName);
      cy.addToCart(productName);
      cy.get('.cartQuantity').should('contain', '1');
    });
  });

  // 4. Cart Tests
  describe('Cart Management', () => {
    beforeEach(() => {
      cy.login(testUser.username, testUser.password);
      cy.searchProduct(productName);
      cy.addToCart(productName);
    });

    it('should update quantity', () => {
      cy.manageCart('updateQuantity', { quantity: '2' });
      cy.get('.itemQuantity').should('have.value', '2');
    });

    it('should remove item', () => {
      cy.manageCart('removeItem');
      cy.get('.emptyCart').should('be.visible');
    });
  });

  // 5. Checkout Test
  describe('Checkout Process', () => {
    before(() => {
      cy.login(testUser.username, testUser.password);
      cy.searchProduct(productName);
      cy.addToCart(productName);
    });

    it('should complete checkout', () => {
      cy.manageCart('proceedToCheckout');
      cy.completeCheckout(testUser);
      cy.get('.orderCompleted').should('be.visible');
    });
  });

  // 6. Account Tests
  describe('Account Features', () => {
    before(() => {
      cy.login(testUser.username, testUser.password);
    });

    it('should view order history', () => {
      cy.manageAccount('viewOrders');
      cy.get('.orderHistory').should('be.visible');
    });
  });

  // 7. UI Tests
  describe('UI Validation', () => {
    it('should verify social links', () => {
      cy.verifyUI('[name="follow_facebook"]', 'socialLinks');
    });

    it('should validate responsive design', () => {
      cy.verifyUI('#mobileMenu', 'responsive');
    });
  });
});