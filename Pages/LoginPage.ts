import { Page, Locator, expect } from "@playwright/test";

export default class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole("textbox", { name: "Username" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async loginUser() {

    await this.usernameInput.fill("standard_user");
    await this.passwordInput.fill("secret_sauce");
    await this.loginButton.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
  }
}
