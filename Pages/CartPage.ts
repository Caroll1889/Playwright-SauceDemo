import { Page, Locator, expect } from "@playwright/test";


export default class CartPage {
    readonly page: Page;
    readonly itemsContainer: Locator;
    readonly cartLink: Locator;
    
    
    itemName: string = "";
    itemDescription: string = "";
    itemPrice: string = "";
    randomItem: string = "";


    constructor(page: Page) {
        this.page = page;
        this.itemsContainer =  page.locator('#inventory_container .inventory_item');
        this.cartLink = page.locator('a.shopping_cart_link');


    }

    async getRandomItem() {
        const items = await this.itemsContainer.all();
        const randomIndex = Math.floor(Math.random() * items.length);
        const randomItem = items[randomIndex];
        this.itemName = (await randomItem.locator('.inventory_item_name ').textContent()) ?? "";
        this.itemDescription = (await randomItem.locator('.inventory_item_desc').textContent()) ?? "";
        this.itemPrice = (await randomItem.locator('.inventory_item_price').textContent()) ?? "";
        await randomItem.getByRole('button', {name: 'Add to cart'}).click();
    }

    async goToCart() {
        await this.cartLink.click();
        expect(this.page.getByRole('button', {name: 'Checkout'})).toBeVisible();
    }

}