import { test, expect } from '@playwright/test';
import { Pages } from '../components/pages/pages';
import * as users from '../login/data/user-data.json';
import * as items from './data/item-data.json';
import { NavbarPanel } from '../components/panels/navbar-panel';
import { TIMEOUTS } from '../constants/timeouts';
import { CommonUtils } from '../utils/common-utils';

test.beforeEach('Login with valid credentials', async ({ page }) => {
    const pages = Pages(page);
    let navbarUtils = new NavbarPanel(page);

    await pages.homePage.navigateToHomePage();
    await pages.loginForm.gotoLoginForm();
    await pages.loginForm.loginWithCredentials(users.validUser.login, users.validUser.password);
    await expect(navbarUtils.loginName).toBeVisible({ timeout: TIMEOUTS.SMALL_TIMEOUT });
});

test.describe('[ @Feature-Shopping ] Verify Shopping test scenarios', () => {
    
    test('[ @P1 @Regression ] Add and remove specific item from the cart', async ({ page }) => {
        const pages = Pages(page);
        let commonUtils = new CommonUtils(page);
        commonUtils.alertHandler(page, pages.itemPage.validationMessages.productAdded);
        
        await pages.homePage.selectItem(items.valid.phones['Nexus-6'].name);
        await pages.itemPage.addItemToCart();
        await pages.cartPage.gotoCartPage();
        await expect(pages.cartPage.itemInCart(items.valid.phones['Nexus-6'].name)).toBeTruthy();

        await pages.cartPage.rmItemFromCart(items.valid.phones['Nexus-6'].name);
        expect(await pages.cartPage.cartItemCount()).toBe(0);
    });
});