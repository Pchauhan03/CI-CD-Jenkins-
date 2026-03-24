import{test , expect } from "@playwright/test"

test("diff loctors" , async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
const name = page.locator('#name')
await name.fill("Prerna")
await page.getByPlaceholder('Enter EMail').fill("abc@Gmail.com")
await page.locator("//input[@id='phone']").fill('1234567')
await page.locator('#male').check();

}
)
