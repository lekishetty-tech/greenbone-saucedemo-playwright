# 10 Test Cases
1.Verify that standard_user can log in successfully with valid credentials.

2.Verify that locked_out_user cannot log in and sees an appropriate error message.
3.Verify that problem_user can log in but product page displays correctly (or known UI issues are visible).
4.Verify that user can add a single product to the cart from the inventory page.
5.Verify that user can add multiple products to the cart and cart count updates correctly.
6.Verify that user can remove items from the cart successfully.
7.Verify that user can sort products by price (low to high and high to low).
8.Verify that user can complete checkout with valid information successfully.
9.Verify that user sees an error when attempting checkout with missing required fields.
10.Verify that user can logout successfully and is redirected to login page.
    
## TCMS Test Case (Example)

**Test Case ID: TC_SAUCE_001**

Preconditions

User has access to https://www.saucedemo.com/
Application is up and running
Valid credentials are available:
    Username: standard_user
    Password: secret_sauce
    
Test Steps

1	Open browser and navigate to https://www.saucedemo.com/
2	Enter username: standard_user
3	Enter password: secret_sauce
4	Click on the “Login” button

Expected Result

1  User is successfully logged in
2  User is redirected to the Products page (/inventory.html)
3  Product list is displayed
4  No error message is shown

Actual Result

(To be filled during execution)

Status

Pass / Fail (based on execution)

Postconditions

User session is active
User is on inventory page
