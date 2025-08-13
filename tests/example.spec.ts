import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage';
import CartPage from '../Pages/CartPage';
import VerificationPage from '../Pages/VerificationPage';
import CheckoutInformation from '../Pages/CheckoutInformation';
import CheckoutOverview from '../Pages/CheckoutOverview';
import CompletePurchasePage from '../Pages/CompletePurchasePage';

let loginPage: LoginPage;
let cartPage: CartPage;
let verificationPage: VerificationPage;
let checkoutInformation: CheckoutInformation;
let checkoutOverview: CheckoutOverview;
let completePurchasePage: CompletePurchasePage;

test('Automation Shopping Cart Workflow', async ({ page }) => {
  loginPage = new LoginPage(page);
  cartPage = new CartPage(page);
  verificationPage = new VerificationPage(page);
  checkoutInformation = new CheckoutInformation(page);
  checkoutOverview = new CheckoutOverview(page);
  completePurchasePage = new CompletePurchasePage(page);
  
  await page.goto('https://www.saucedemo.com/');
  await loginPage.loginUser();
  await cartPage.getRandomItem();
  await cartPage.goToCart();
  await verificationPage.verifyDetails(cartPage);
  await checkoutInformation.fillCheckoutInformation('Alice', 'Firstimer', '50066');
  await checkoutOverview.verificationOverview(verificationPage);
  await completePurchasePage.successfulPurchase();
});
