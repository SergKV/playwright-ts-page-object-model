import { test, expect } from '@playwright/test';
import { Pages } from '../components/pages/pages';
import * as users from '../login/data/user-data.json';
import * as items from './data/item-data.json';
import { NavbarPanel } from '../components/panels/navbar-panel';
import { TIMEOUTS } from '../constants/timeouts';
import { CommonUtils } from '../utils/common-utils';

test.beforeEach('Login with valid credentials -> Add specific item to the cart', async ({ page }) => {
    const pages = Pages(page);
    let navbarUtils = new NavbarPanel(page);
    
    await pages.homePage.navigateToHomePage();
    await pages.loginForm.gotoLoginForm();
    await pages.loginForm.loginWithCredentials(users.validUser.login, users.validUser.password);
    await expect(navbarUtils.loginName).toBeVisible({ timeout: TIMEOUTS.SMALL_TIMEOUT });
});

test.describe('[ @Feature-Checkout ] Place order', () => {
    
    test('[ @P1 @Regression ] Place order with valid data.', async ({ page }) => {
        const pages = Pages(page);
        let commonUtils = new CommonUtils(page);

        commonUtils.alertHandler(page, pages.itemPage.validationMessages.productAdded);

        // add item to cart
        await pages.homePage.selectItem(items.valid.phones['Samsung-galaxy-s6'].name);
        await pages.itemPage.addItemToCart();
        await pages.cartPage.gotoCartPage();
        await expect(pages.cartPage.itemInCart(items.valid.phones['Samsung-galaxy-s6'].name)).toBeTruthy();

        // place order
        await pages.cartPage.submitOrder();
        await pages.checkoutForm.formTitle.isVisible();
        await pages.checkoutForm.fillCheckoutForm(users.validUser.name, users.validUser.country, users.validUser.city, users.validUser.card, users.validUser.month, users.validUser.year);
        await pages.checkoutForm.submitCheckoutForm();
        await expect(pages.checkoutPopup.popupTitle).toBeVisible();

        // close popup
        await pages.checkoutPopup.closePopup();
        await expect(pages.checkoutForm.formTitle).not.toBeVisible();
    });

    test('[ @P1 @Regression ] Place order with invalid data.', async ({ page }) => {
        const pages = Pages(page);
        let commonUtils = new CommonUtils(page);

        commonUtils.alertHandler(page, pages.checkoutForm.validationMessages.PleaseFillOutNameAndCreditcard);

        // add item to cart
        await pages.homePage.selectItem(items.valid.phones['Iphone-6-32gb'].name);
        await pages.itemPage.addItemToCart();
        await pages.cartPage.gotoCartPage();
        await expect(pages.cartPage.itemInCart(items.valid.phones['Iphone-6-32gb'].name)).toBeTruthy();
        
        // place order
        await pages.cartPage.submitOrder();
        await pages.checkoutForm.formTitle.isVisible();
        await pages.checkoutForm.fillCheckoutForm(users.validUser.name, users.validUser.country, users.validUser.city, '', users.validUser.month, users.validUser.year);
        await pages.checkoutForm.submitCheckoutForm();

        // remove orphaned item
        await pages.checkoutForm.closeCheckoutForm();
        await pages.cartPage.rmItemFromCart(items.valid.phones['Iphone-6-32gb'].name);
        expect(await pages.cartPage.cartItemCount()).toBe(0);
    });
});