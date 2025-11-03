// /popups/checkout-popup.ts
import { BasePage, expect } from '../pages/base-page';

export class CheckoutPopup extends BasePage {    
    popupTitle = this.page.locator('.showSweetAlert.sweet-alert.visible > h2');
    popupCloseButton = this.page.locator('.btn.btn-lg.btn-primary.confirm');

    async closePopup() {
        await this.popupCloseButton.click();
    }
}