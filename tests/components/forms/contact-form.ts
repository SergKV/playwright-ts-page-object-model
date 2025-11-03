// /forms/contact-form.ts
import { BasePage, expect } from '../pages/base-page';

export class ContactForm extends BasePage {
    formTitle = this.page.locator('#exampleModalLabel');
    emailField = this.page.locator('#recipient-email');
    nameField = this.page.locator('#recipient-name');
    messageField = this.page.locator('#message-text');
    closeButton = this.page.locator("div#exampleModal > div[role='document'] .btn.btn-secondary");
    sendMessageButton = this.page.locator("div#exampleModal > div[role='document'] .btn.btn-primary");
    popupDialog = this.page.getByText('www.demoblaze.com says')

    async gotoContactForm() {
        await this.navbarPanel.gotoContact();
        await expect(this.formTitle).toBeVisible();
    }

    async closeContactForm() {
        await this.closeButton.click();
    }

    async fillContactForm(name: string, email: string, message: string) {
        await this.nameField.fill(name);
        await this.emailField.fill(email);
        await this.messageField.fill(message);
    }

    async submitContactForm() {
        await this.sendMessageButton.click();
    }
}
