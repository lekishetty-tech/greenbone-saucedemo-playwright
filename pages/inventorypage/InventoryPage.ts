import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  private readonly addToCartBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
  private readonly addToCartBikeLightBtn = '[data-test="add-to-cart-sauce-labs-bike-light"]';
  private readonly cartIcon = '[data-test="shopping-cart-link"]';
  private readonly cartBadge = '.shopping_cart_badge';

  async addSingleItem() {
    await this.page.click(this.addToCartBtn);
  }

  async addMultipleItems() {
    await this.page.click(this.addToCartBtn);
    await this.page.click(this.addToCartBikeLightBtn);
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }

  async verifyCartCount(count: number) {
    await expect(this.page.locator(this.cartBadge)).toHaveText(String(count));
  }
}