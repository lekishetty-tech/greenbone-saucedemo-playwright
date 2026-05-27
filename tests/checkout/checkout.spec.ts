import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage/LoginPage';
import { InventoryPage } from '../../pages/inventorypage/InventoryPage';
import { CartPage } from '../../pages/cartpage/CartPage';
import { CheckoutPage } from '../../pages/checkoutpage/CheckoutPage';

test('Complete checkout successfully', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addSingleItem();
  await inventory.openCart();

  await cart.goToCheckout();

  await checkout.fillDetails('John', 'Doe', '12345');
  await checkout.finishCheckout();

  await checkout.assertSuccess();
});