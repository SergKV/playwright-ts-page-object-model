import { expect, test } from '@playwright/test';
import { Pages } from '../components/pages/pages';
import { NavbarPanel } from '../components/panels/navbar-panel';
import * as users from './data/user-data.json'
import { TIMEOUTS } from '../constants/timeouts';
import { CommonUtils } from '../utils/common-utils';


test.describe('[ @Feature-Login ] Verify Login test scenarios', () => {
    test('[ @P1 @Smoke ] Verify user login with valid credentials and logout successfully', async ({ page }) => {
        const pages = Pages(page);
        let navbarUtils = new NavbarPanel(page);

        await pages.homePage.navigateToHomePage();
        await pages.loginForm.gotoLoginForm();
        await pages.loginForm.loginWithCredentials(users.validUser.login, users.validUser.password);
        await expect(navbarUtils.loginName).toBeVisible({ timeout: TIMEOUTS.SMALL_TIMEOUT });

        await navbarUtils.logout();
        await expect(navbarUtils.loginName).not.toBeVisible({ timeout: TIMEOUTS.SMALL_TIMEOUT });
    });

    test('[ @P1 @Regression ] Verify user is unable to login with invalid credentials', async ({ page }) => {
        const pages = Pages(page); 
        let commonUtils = new CommonUtils(page);
        commonUtils.alertHandler(page, pages.loginForm.validationMessages.userDoesNotExist);

        await pages.homePage.navigateToHomePage();
        await pages.loginForm.gotoLoginForm();
        await pages.loginForm.loginWithCredentials(users.invalidUser.userName, users.invalidUser.password);

        await expect(pages.loginForm.loginButton).toBeVisible({ timeout: TIMEOUTS.SMALL_TIMEOUT });
    });
});