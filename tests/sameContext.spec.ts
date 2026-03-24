import { test, expect, BrowserContext, Page , Locator } from '@playwright/test';

let context: BrowserContext;
let page_fix: Page ;

test.beforeEach(async ({ page}) => {
    // page_fix = page;
//   page = await context.newPage();

 await page.goto("https://practicesoftwaretesting.com/auth/login")
});

// test.afterAll(async () => {
//   await context.close();
// });

test("Login with valid credentials", async ({page}) => {

  await page.fill("#email", "customer2@practicesoftwaretesting.com");
  await page.fill("#password", "welcome01");
  const LogIn :Locator = page.locator('.btnSubmit')
  await LogIn.click();

  await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

});

test("Verify profile page after login", async ({page}) => {

  const heading = page.locator('[data-test="page-title"]');

  await expect(heading).toBeVisible();
  await expect(heading).toHaveText("My account");

});