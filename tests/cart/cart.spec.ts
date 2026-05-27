import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage/LoginPage';
import { InventoryPage } from '../../pages/inventorypage/InventoryPage';

const user = 'standard_user';
const password = 'secret_sauce';

test('Add single product to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login(user, password);

  await inventory.addSingleItem();
  await inventory.verifyCartCount(1);
});

test('Add multiple products to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login(user, password);

  await inventory.addMultipleItems();
  await inventory.verifyCartCount(2);
});