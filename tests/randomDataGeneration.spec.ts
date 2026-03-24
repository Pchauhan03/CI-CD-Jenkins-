import { test, expect } from '@playwright/test';

test('registers a new user with random data', async ({ page }) => {
  const randomEmail = `test${Math.floor(Math.random() * 10000)}@example.com`;
  const randomPassword = `Pass${Math.floor(Math.random() * 10000)}!`;

  await page.goto('https://demowebshop.tricentis.com/register');

  // Fill the registration form
  await page.check('#gender-male'); // or '#gender-female'
  await page.fill('#FirstName', 'Test');
  await page.fill('#LastName', 'User');
  await page.fill('#Email', randomEmail);
  await page.fill('#Password', randomPassword);
  await page.fill('#ConfirmPassword', randomPassword);

  // Submit the form
  await page.click('#register-button');

  // Assert registration was successful
  await expect(page.locator('.result')).toContainText('Your registration completed');

  // Print generated data for debugging
  console.log({ randomEmail, randomPassword });
});