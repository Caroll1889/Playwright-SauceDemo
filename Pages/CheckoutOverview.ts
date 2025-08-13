import { Page, Locator, expect } from "@playwright/test";
import VerificationPage from "./VerificationPage";


export default class CheckoutOverview {
    readonly page: Page;
    readonly confirmationPrice: Locator;
    readonly confirmationName: Locator;
    readonly confirmationDescription: Locator;
    readonly finishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.confirmationPrice = page.locator('.inventory_item_price');
        this.confirmationName = page.locator('.inventory_item_name');
        this.confirmationDescription = page.locator('.inventory_item_desc');
        this.finishButton = page.getByRole('button', {name: 'Finish'});

    }
        async verificationOverview(details: VerificationPage) {
            const confirmationPrice = await this.confirmationPrice.textContent();
            const confirmationName = await this.confirmationName.textContent();
            const confirmationDescription = await this.confirmationDescription.textContent();

            const expectedPrice = await details.cartPrice.textContent();
            const expectedName = await details.cartName.textContent();
            const expectedDescription = await details.cartDescription.textContent();

            expect(confirmationPrice).toEqual(expectedPrice);
            expect(confirmationName).toEqual(expectedName);
            expect(confirmationDescription).toEqual(expectedDescription);
            await this.finishButton.click();
    }
}