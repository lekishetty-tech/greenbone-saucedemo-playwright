import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private username = '[data-test="username"]';
  private password = '[data-test="password"]';
  private loginBtn = '[data-test="login-button"]';
  private errorMsg = '[data-test="error"]';

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(user: string, pass: string) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }

  async assertLoginError() {
    await expect(this.page.locator(this.errorMsg)).toBeVisible();
  }
}