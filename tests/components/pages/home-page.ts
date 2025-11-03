// /pages/home-page.ts
import { BasePage, expect } from './base-page';
import { URLS } from '../../constants/urls';

export class HomePage extends BasePage {
    homeLogo = this.page.locator('#nava');
    itemList = this.page.locator('#tbodyid');
    
    async navigateToHomePage() {
        await this.page.goto(URLS.BASE_URL);
        await expect(this.itemList).toBeVisible({ timeout: this.timeouts.SMALL_TIMEOUT });
    }

    async goToHome() {
        await this.navbarPanel.goToHome();
        await expect(this.itemList).toBeVisible({ timeout: this.timeouts.SMALL_TIMEOUT });
    }

    async selectItem(itemName: string) {
        this.page.click(`text=${itemName}`);
    }
}