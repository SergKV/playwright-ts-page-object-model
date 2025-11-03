// /forms/login-form.ts
import { BasePage, expect } from '../pages/base-page';

export class LoginForm extends BasePage {    
    userNameField = this.page.locator('#loginusername')
    passwordField = this.page.locator('#loginpassword')
    closeButton = this.page.locator("div#logInModal > div[role='document'] .btn.btn-secondary");
    loginButton = this.page.locator("div#logInModal > div[role='document'] .btn.btn-primary");
    
    get validationMessages() {
        return {
            userDoesNotExist: "User does not exist.",
            wrongPassword: "Wrong password."
        }
    }

    async gotoLoginForm() {
        await this.navbarPanel.gotoLogin();
    }

    async loginWithCredentials(userName: string, password: string) {
        await this.userNameField.fill(userName);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}
