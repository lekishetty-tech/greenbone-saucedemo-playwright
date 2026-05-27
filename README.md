# Project Structure

This project is organized to keep the test suite easy to read and easy to maintain as it grows.

Page objects and tests are grouped into subfolders based on feature/flow. This keeps related files together and makes it easier to navigate the project. This can be carved out to a separate lib in future if it grows and multiple teams depends on it.

Current structure:

```bash
.
├── docs/
│
├── fixtures/
│
├── pages/
│   ├── login/
│   │   └── LoginPage.ts
│   │
│   ├── inventory/
│   │   └── InventoryPage.ts
│   │
│   ├── cart/
│   │   └── CartPage.ts
│   │
│   └── checkout/
│       └── CheckoutPage.ts
│
├── tests/
│   ├── login/
│   │   └── login.spec.ts
│   │
│   ├── cart/
│   │   └── cart.spec.ts
│   │
│   └── checkout/
│       └── checkout.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Structure Overview

### docs/
Contains assignment-related documentation such as:
- identified test cases
- detailed TCMS test case
- prioritization notes

---

### fixtures/
Reserved for reusable setup if needed later.

Examples:
- authenticated session setup
- shared test data
- reusable test hooks

At the moment, tests are kept independent, so no shared fixtures are required.

---

### pages/
Contains Page Object Model classes.

Each page has its own folder and file.

Examples:
- `pages/login/LoginPage.ts`
- `pages/cart/CartPage.ts`

This keeps selectors and UI actions separated from test logic.

Benefits:
- easier to maintain
- reusable methods
- less duplicated code
- cleaner test files

---

### tests/
Contains automated test cases grouped by feature.

Examples:
- login tests
- cart tests
- checkout tests

Each test focuses on one business flow and can run independently.

Grouping tests into subfolders makes the suite easier to scale and easier to review.

---

# Automation Approach

The framework follows Page Object Model.

Page files contain:
- selectors
- reusable UI actions

Test files contain:
- test steps
- validations
- flow-specific assertions

Example:

Test:

```typescript
await loginPage.login('standard_user', 'secret_sauce');
```

Page object:

```typescript
async login(username: string, password: string) {
  ...
}
```

This keeps tests readable and avoids repeating selectors.

---

# Selector Strategy

Selectors are based on SauceDemo `data-test` attributes whenever available.

Example:

```typescript
[data-test="login-button"]
```

This approach was chosen because it is:
- stable
- readable
- easier to maintain

Avoided where possible:
- XPath
- deep CSS selectors
- text-based selectors for critical actions

---

# Test Data

Stable and predictable test data is important for reliable automation.

---

# How to Install

After cloning the repository, install dependencies with:

```bash
npm install
```

Then install Playwright browsers:

```bash
npx playwright install
```

This installs:
- Chromium
- Firefox
- WebKit

---

# How to Run Tests

Run the full suite:

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run login tests only:

```bash
npx playwright test tests/login/login.spec.ts
```

Run cart tests only:

```bash
npx playwright test tests/cart/cart.spec.ts
```

Run checkout tests only:

```bash
npx playwright test tests/checkout/checkout.spec.ts
```

Open HTML report after execution:

```bash
npx playwright show-report
```

---

# Browser Information

Playwright supports:
- Chromium
- Firefox
- WebKit

For this assignment, Chromium was used as the primary browser.

Reason:
- stable execution
- fast feedback
- commonly used browser for UI automation

Optional:

Run tests in Firefox:

```bash
npx playwright test --project=firefox
```

Run tests in WebKit:

```bash
npx playwright test --project=webkit
```

---

# Contribution Guide

If adding more tests or extending the framework:

### Keep page interactions inside page objects
Avoid placing selectors directly inside test files.

Preferred:

```typescript
await inventoryPage.addSingleItem();
```

---

### Use stable selectors
Prefer:

```typescript
[data-test="..."]
```

Avoid fragile selectors when possible.

---

### Keep tests independent
Each test should:
- manage its own setup
- not depend on another test
- be runnable on its own

---

### Reuse methods
If an action is repeated, add it to the page object instead of duplicating code.

---

### Keep naming clear
Examples:
- `LoginPage.ts`
- `checkout.spec.ts`

Simple naming makes the project easier to understand.

---

# Best Practices Followed

- Playwright with TypeScript
- Page Object Model
- feature-based folder structure
- readable selectors
- reusable page methods
- independent tests
- clean separation between test logic and UI actions

The goal was to keep the framework maintainable, readable, and easy to extend while covering the highest priority user flows.