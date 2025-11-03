// /pages/item-page.ts
import { BasePage, expect } from './base-page';
import { URLS } from '../../constants/urls';

export class ItemPage extends BasePage {
    itemName = this.page.locator('.name');
    itemPrice = this.page.locator('.price-container');
    itemDescription = this.page.locator('#more-information p');
    addToCartButton = this.page.locator('.btn-success');

    get validationMessages() {
        return {
            productAdded: "Product added."
        }
    }

    async addItemToCart() {
        await this.addToCartButton.click();
    }
}