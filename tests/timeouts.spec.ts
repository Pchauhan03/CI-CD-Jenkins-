import { test } from '@playwright/test';

test('action timeout example', async ({ page }) => {
  await page.goto('https://example.com');
  await page.click('#slow-button', { timeout: 10000 }); // 10 seconds for this click
});

test.beforeEach(async ({ page }, testInfo) => {
  // Extend timeout for all tests running this hook by 30 seconds.
  testInfo.setTimeout(testInfo.timeout + 30_000);
});

test('navigation timeout example', async ({ page }) => {
  await page.goto('https://example.com', { timeout: 20000 }); // 20 seconds for this navigation
});


test.beforeAll(async () => {
  test.setTimeout(60000); // 60 seconds for this beforeAll hook
  // ...long setup code...
});

test.afterAll(async () => {
  test.setTimeout(60000); // 60 seconds for this afterAll hook
  // ...long teardown code...
});

