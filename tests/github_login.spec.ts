// require('dotenv').config();
import dotenv from 'dotenv';
import path from 'node:path';
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// const { test, expect } = require('@playwright/test');
import{test , expect} from "@playwright/test"

test('GitHub login test', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.fill('input[name="login"]', process.env.GITHUB_USERNAME!);
  await page.fill('input[name="password"]', process.env.GITHUB_PASSWORD!);
  await page.click('input[type="submit"]');
  await expect(page).toHaveURL('https://github.com/');
});