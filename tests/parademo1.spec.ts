 import { test , expect, Locator , Page } from "@playwright/test" 
   test.describe("verify the  parallesim" ,  ()=>{
       test("test3" , async({page , browserName})=>{
        //  if (browserName !== 'chromium') test.skip();
        await page.goto("https://apps.apple.com/in/app/apple-store/id375380948")
        //goto will open the url on the particular page
        let title:string = await page.title(); // will give the title
        console.log("title:" ,title)
        await expect(page).toHaveTitle("‎Apple Store App - App Store")
        console.log("test3");
            })

       test("test4" , async({page , browserName})=>{
        // if (browserName !== 'firefox') test.skip();
        await page.goto("https://demowebshop.tricentis.com/")
        const searchbox:Locator = page.locator("#small-searchterms")
        await expect(searchbox).toBeVisible();
        await searchbox.fill("shoes")
        await page.waitForTimeout(3000)
        console.log("test4");
        })
       })



// way1
// import { test } from '@playwright/test';

// test.describe.configure({ mode: 'parallel' });

// test('runs in parallel 1', async ({ page }) => { /* ... */ });
// test('runs in parallel 2', async ({ page }) => { /* ... */ });

//way2
// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   fullyParallel: true,
// });