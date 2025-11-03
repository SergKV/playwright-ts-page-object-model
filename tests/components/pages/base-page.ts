// /pages/base-page.ts
import { Page } from '@playwright/test';
import { CommonUtils } from '../../utils/common-utils';
import { NavbarPanel } from '../panels/navbar-panel';
import { TIMEOUTS } from '../../constants/timeouts';

export class BasePage {
    protected navbarPanel: NavbarPanel;
    protected commonUtils: CommonUtils;
    protected timeouts: typeof TIMEOUTS;

    constructor(protected page: Page, timeouts: typeof TIMEOUTS = TIMEOUTS) {
        this.page = page;
        this.navbarPanel = new NavbarPanel(page);
        this.commonUtils = new CommonUtils(page);
        this.timeouts = TIMEOUTS;
    }
}

export { expect, Page } from '@playwright/test';