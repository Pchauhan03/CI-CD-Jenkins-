import{test , expect} from "@playwright/test"

test("Testing in shadow DOM websites" , async ({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/")
    const name =page.locator('#kils') //div>>#kils
    await expect(name).toBeVisible();
    await name.fill("Prerna")
    await  page.locator('#pizza').fill("Cheese onion")
    // await page.getByRole('textbox', { name: /enter password/i }).fill("Prerna`123") //shadow - close
})