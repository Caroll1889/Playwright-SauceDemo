import { Page, Locator } from "@playwright/test";


export default class CheckoutInformation {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly zipCodeInput: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByRole('textbox', {name: 'First Name '});
        this.lastNameInput = page.getByRole('textbox', {name: 'Last Name'});
        this.zipCodeInput = page.getByRole('textbox', {name: 'Zip/Postal Code'});
        this.continueButton = page.getByRole('button', {name: 'Continue'})
    }

    async fillCheckoutInformation(firstName: string, lastName: string, zipCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.zipCodeInput.fill(zipCode);
        await this.continueButton.click();    }
}