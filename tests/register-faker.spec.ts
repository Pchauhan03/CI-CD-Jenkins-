import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('registers a new user with random data', async ({ page }) => {
  // Generate random user data using faker
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const password = faker.internet.password();

  // Go to the registration page
  await page.goto('https://demowebshop.tricentis.com/register');

  // Fill the registration form
  await page.check('#gender-male'); // or '#gender-female'
  await page.fill('#FirstName', firstName);
  await page.fill('#LastName', lastName);
  await page.fill('#Email', email);
  await page.fill('#Password', password);
  await page.fill('#ConfirmPassword', password);

  // Submit the form
  await page.click('#register-button');

  // Assert registration was successful
  await expect(page.locator('.result')).toContainText('Your registration completed');

  // Print generated data for debugging
  console.log({ firstName, lastName, email, password });
});