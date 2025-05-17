Feature: Advantage Online Shopping - Comprehensive Test Cases

  Scenario: 1. Successful User Registration
    Given I am on the home page
    When I open the registration form
    And I fill in valid registration details
    And I submit the registration form
    Then I should be registered successfully

  Scenario: 2. Successful Login with Valid Credentials
    Given I am on the home page
    When I login with valid credentials
    Then I should be logged in

  Scenario: 3. Failed Login with Invalid Credentials
    Given I am on the home page
    When I login with invalid credentials
    Then I should see error message

  # Product Tests
  Scenario: 4. Product Search Functionality
    Given I am on the home page
    When I search for "Bose Speaker"
    Then I should see relevant results

  Scenario: 5. Category Navigation
    Given I am on the home page
    When I select "Speakers" category
    Then I should see speaker products

  Scenario: 6. Product Details View
    Given I am viewing "Speakers" category
    When I select "Bose SoundLink"
    Then I should see product details

  # Cart Operations
  Scenario: 7. Add Product to Cart
    Given I am viewing a product
    When I add it to cart
    Then Cart should update

  Scenario: 8. Remove Product from Cart
    Given I have items in cart
    When I remove an item
    Then Cart should update

  Scenario: 9. Update Cart Quantity
    Given I have items in cart
    When I change quantity to "2"
    Then Total should update

  # Checkout Process
  Scenario: 10. Complete Checkout Process
    Given I have items in cart
    When I proceed to checkout
    And fill shipping details
    Then Order should be placed

  # Account Management
  Scenario: 11. View Order History
    Given I am logged in
    When I view order history
    Then I should see past orders

  Scenario: 12. Update Account Information
    Given I am logged in
    When I update my details
    Then Changes should be saved

  Scenario: 13. Change Password
    Given I am logged in
    When I change password
    Then Password should update

  # UI Verification
  Scenario: 14. Verify Social Media Links
    Given I am on the home page
    Then All social links should work

  Scenario: 15. Responsive Design Check
    Given I view on mobile
    Then Layout should adjust properly