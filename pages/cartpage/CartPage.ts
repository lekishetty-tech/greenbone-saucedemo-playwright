import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  private checkoutBtn = '[data-test="checkout"]';
  private removeBtn = '[data-test="remove-sauce-labs-backpack"]';

  async removeItem() {
    await this.page.click(this.removeBtn);
  }

  async goToCheckout() {
    await this.page.click(this.checkoutBtn);
  }
}