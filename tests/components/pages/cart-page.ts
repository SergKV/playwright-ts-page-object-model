// /pages/cart-page.ts
import { BasePage, expect } from './base-page';

export class CartPage extends BasePage {
    pageTitle = this.page.locator('.col-lg-8 > h2');
    productList = this.page.locator('#tbodyid');
    placeOrderButton = this.page.locator('.btn.btn-success');

    async gotoCartPage() {
        await this.navbarPanel.goToCart();
        await expect(this.pageTitle).toBeVisible();
    }

    async itemInCart(itemName: string) {
        let itemLocator = this.page.locator(`tr:has-text("${itemName}")`);
        return itemLocator.isVisible();
    }

    async rmItemFromCart(itemName: string) {
        const rowSelector = `tr:has-text("${itemName}")`;
        const deleteButton = await this.page.$(`${rowSelector} a:has-text("Delete")`);
        if (deleteButton) {
            await deleteButton.click();
        }

        const itemDeletedLocator = this.page.locator(`tr:has-text("${itemName}")`);
        await expect(itemDeletedLocator).toHaveCount(0);
    }

    async cartItemCount() : Promise<number> {
        let rowCount = await this.productList.locator('tr').count();
        return rowCount;
    }

    async submitOrder() {
        await this.placeOrderButton.click();
    }
}