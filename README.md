# QA Automation – SauceDemo Shopping Cart Flow

## 📌 Project Overview

This project automates the shopping cart purchase flow on [SauceDemo](https://www.saucedemo.com/) using **Playwright**.  
It validates the critical path from user login to order completion.

## 🎯 Scope
- Login with valid credentials.
- Add one or more products to the cart.
- Verify cart content, price, and quantity.
- Complete the checkout process.
- Confirm that the order completion message is displayed.

## 🛠️ Tools & Technologies
- [Playwright](https://playwright.dev/)
- Typescript
- Node.js
- Git & GitHub

## ✅ Assertions
- Products in the cart match selected items.
- Prices and totals are accurate at each step.
- Successful checkout returns a confirmation message.

## 📂 Project Structure
- /Pages
    -  cartPage.ts
    - CheckoutInformation.ts
    - CheckoutOverview.ts
    - CompletePurchasePage.ts
    - LoginPage.ts
    - VerificationPage.ts
- /tests
    - cartFlow.spec.ts

- package-lock.json
- package.json
- playwright.config.js
- README.md

# ▶️ How to Run

## Install dependencies
**npm install**

## Run in headed mode
**npx playwright test --headed**

## Run in headless mode
**npx playwright test**

## 🎥 Video Demo
<video src="/Videos and Screenshots/video.mp4" width="320" height="240" controls></video>

