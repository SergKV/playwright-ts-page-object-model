import { Page } from '@playwright/test';
import { HomePage } from './home-page';
import { ContactForm } from '../forms/contact-form';
import { LoginForm } from '../forms/login-form';
import { CartPage } from './cart-page';
import { ItemPage } from './item-page';
import { CheckoutForm } from '../forms/checkout-form';
import { CheckoutPopup } from '../popups/checkout-popup';

export const Pages = (page: Page) => {
    return {
        homePage: new HomePage(page),
        contactForm: new ContactForm(page),
        loginForm: new LoginForm(page),
        cartPage: new CartPage(page),
        itemPage: new ItemPage(page),
        checkoutForm: new CheckoutForm(page),
        checkoutPopup: new CheckoutPopup(page)
    };
};