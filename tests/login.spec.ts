import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../fixtures/users';

test('standard user login', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();

  await login.login(
    users.standard.username,
    users.standard.password
  );

  await expect(page).toHaveURL(/inventory/);
});
