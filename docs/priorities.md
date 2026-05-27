#  Prioritized Test Cases (High → Low Priority)

---

##  Priority 1 (Critical – P0: Core business flow must work)

### 1. Login with standard_user (valid credentials)
- This is the entry point of the entire application  
- If login fails, nothing else can be tested  
- Core authentication flow  

---

### 2. Complete checkout with valid information successfully
- This is the main business goal (purchase flow)  
- Validates end-to-end workflow: cart → checkout → order completion  
- Any failure here = broken revenue flow  

---

### 3. Add single product to cart
- Core shopping functionality  
- If users cannot add items, checkout becomes meaningless  

---

### 4. Add multiple products and verify cart count
- Ensures cart logic works correctly  
- Validates state management across multiple items  

---

##  Priority 2 (High – P1: Important functionality, affects usability)

### 5. Remove items from cart
- Users frequently modify cart before purchase  
- Impacts checkout accuracy  

---

### 6. Checkout validation error (missing required fields)
- Ensures proper form validation  
- Prevents incomplete or invalid orders  

---

### 7. Logout functionality
- Ensures session handling works correctly  
- Important for security and multi-user scenarios  

---

##  Priority 3 (Medium – P2: Functional but not business-critical)

### 8. Sort products (low → high, high → low)
- Improves user experience  
- Not required for purchase but affects usability and decision-making  

---

### 9. locked_out_user login failure
- Negative test case for security/access control  
- Important but does not affect primary happy path users  

---

##  Priority 4 (Low – P3: Edge case / UI behavior validation)

### 10. problem_user login and UI behavior check
- Used mainly for known defect simulation / demo purposes  
- Does not represent real-world critical user behavior  
- Mostly useful for testing UI inconsistencies  
