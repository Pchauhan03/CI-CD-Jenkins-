import { test, expect } from '@playwright/test';

test('Test 1: Open homepage', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle("The Internet");
  console.log("Test1");
  
});

test('Test 2: Login (flaky)', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  const random = Math.random();
  console.log('Login random:', random);

  // Simulate flaky login
  expect(random).toBeGreaterThan(0.5);
  console.log("test 2");
  
});

test('Test 3: Add to cart', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(true).toBeTruthy();
  console.log("test3");
  
});

test('Test 4: Checkout', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(true).toBeTruthy();
  console.log("test4");
  
});