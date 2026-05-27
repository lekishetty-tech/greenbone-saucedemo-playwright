# Test Cases
1. Verify standard_user can log in with valid credentials
2. Verify login fails with invalid credentials
3. Verify locked_out_user cannot log in
4. Verify inventory page displays after login
5. Verify user can add product to cart
6. Verify user can remove product
7. Verify cart badge updates
8. Verify checkout completes
9. Verify checkout validation
10. Verify logout works
    
## Detailed TCMS Example
### TC-001 Login
Priority: High

Preconditions:
- user on login page
Steps:
1. open app
2. enter standard_user
3. enter secret_sauce
4. click login
Expected:
- redirected to inventory
- product list visible
