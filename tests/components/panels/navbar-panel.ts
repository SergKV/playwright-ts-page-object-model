// /panels/navbar-panel.ts
import { Page, Locator } from '@playwright/test';

export class NavbarPanel {
  private LoginName: Locator;
  private LoginButton: Locator;
  private LogoutButton: Locator;

  constructor(private page: Page) {
    this.LoginName = page.locator('#nameofuser');
    this.LoginButton = page.locator('#login2');
    this.LogoutButton = page.locator('#logout2');
  }

  get loginName(): Locator {
    return this.LoginName;
  }

  get loginButton(): Locator {
    return this.LoginButton; 
  }

  get logoutButton(): Locator {
    return this.LogoutButton;
  }

  async goToHome(): Promise<void> {
    await this.page.click('a[href="index.html"]');
  }

  async goToCart(): Promise<void> {
    await this.page.click('a[href="cart.html"]');
  }

  async gotoContact(): Promise<void> {
    await this.page.click('a[data-target="#exampleModal"]');
  }

  async gotoAbout(): Promise<void> {
    await this.page.click('a[data-target="#videoModal"]');
  }

  async gotoLogin(): Promise<void> {
    await this.page.click('#login2');
  }

  async gotoSignup(): Promise<void> {
    await this.page.click('#signin2');
  }

  async logout(): Promise<void> {
    await this.page.click('#logout2');
  }
}

export default NavbarPanel;