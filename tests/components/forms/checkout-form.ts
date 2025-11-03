// /forms/checkout-form.ts
import { BasePage, expect } from '../pages/base-page';

export class CheckoutForm extends BasePage {    
    formTitle = this.page.locator('#orderModalLabel');
    nameField = this.page.locator('#name');
    countryField = this.page.locator('#country');
    cityField = this.page.locator('#city');
    cardField = this.page.locator('#card');
    monthField = this.page.locator('#month');
    yearField = this.page.locator('#year');
    closeButton = this.page.locator("div#orderModal > div[role='document'] .btn.btn-secondary");
    purchaseButton = this.page.locator("div#orderModal > div[role='document'] .btn.btn-primary");

    get validationMessages() {
        return {
            PleaseFillOutNameAndCreditcard: "Please fill out Name and Creditcard."
        }
    }

    async fillCheckoutForm(name: string, country: string, city: string, card: string, month: string, year: string) {
        await this.nameField.fill(name);
        await this.countryField.fill(country);
        await this.cityField.fill(city);
        await this.cardField.fill(card);
        await this.monthField.fill(month);
        await this.yearField.fill(year);
    }

    async submitCheckoutForm() {
        await this.purchaseButton.click();
    }

    async closeCheckoutForm() {
        await this.closeButton.click();
    }
}