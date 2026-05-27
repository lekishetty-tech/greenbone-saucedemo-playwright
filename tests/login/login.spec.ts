import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage/LoginPage';

test('Login with standard_user', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
});