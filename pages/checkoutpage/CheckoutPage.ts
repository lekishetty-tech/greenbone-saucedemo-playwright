import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  private firstName = '[data-test="firstName"]';
  private lastName = '[data-test="lastName"]';
  private postalCode = '[data-test="postalCode"]';
  private continueBtn = '[data-test="continue"]';
  private finishBtn = '[data-test="finish"]';
  private ordrerMsg = '[data-test="complete-header"]'

  async fillDetails(first: string, last: string, zip: string) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, zip);
    await this.page.click(this.continueBtn);
  }

  async finishCheckout() {
    await this.page.click(this.finishBtn);
  }

  async assertSuccess() {
    await expect(this.page.locator(this.ordrerMsg)).toHaveText(
      'Thank you for your order!'
    );
  }
}