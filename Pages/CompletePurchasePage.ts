import { Page, Locator, expect } from "@playwright/test";


export default class CompletePurchasePage {
    readonly page: Page;
    readonly headingConfirmation: Locator;
    readonly backHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headingConfirmation = page.getByRole('heading', {name: 'Thank you for your order!'});
        this.backHomeButton = page.getByRole('button', {name: 'Back Home'});
    }

    async successfulPurchase() {
        expect(this.headingConfirmation).toBeVisible();
        await this.backHomeButton.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }
}
