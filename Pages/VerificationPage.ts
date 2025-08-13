import { Page, Locator, expect } from "@playwright/test";
import  CartPage  from "./CartPage";


export default class VerificationPage {
    readonly page: Page;
    readonly cartPrice: Locator;
    readonly cartName: Locator;
    readonly cartDescription: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartPrice = page.locator('.inventory_item_price');
        this.cartName =  page.locator('.inventory_item_name');
        this.cartDescription = page.locator('.inventory_item_desc');
        this.checkoutButton = page.getByRole('button', {name: 'Checkout'});
    }
    
    async verifyDetails(details: CartPage) {
        const cartPrice = await this.cartPrice.textContent();
        const cartName = await this.cartName.textContent();
        const cartDescription = await this.cartDescription.textContent();

        expect(cartPrice).toEqual(details.itemPrice);
        expect(cartName).toEqual(details.itemName);
        expect(cartDescription).toEqual(details.itemDescription);
        await this.checkoutButton.click();
    }
}