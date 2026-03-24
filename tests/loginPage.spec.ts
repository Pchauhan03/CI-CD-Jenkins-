import{test , expect,Locator} from "@playwright/test"

test("testing login page", async ({page}) =>{
    await page.goto("https://sauce-demo.myshopify.com/")
    const logIn :Locator  =  page.locator('#customer_login_link').first()
    await page.waitForTimeout(2000)
    await logIn.click()
   await expect(page).toHaveURL('https://sauce-demo.myshopify.com/account/login')
    
})

test("testing Valid username and password ", async ({page}) =>{
    await page.goto("https://sauce-demo.myshopify.com/")
    const logIn :Locator  =  page.locator('#customer_login_link').first()
    const email :Locator = page.locator('#customer_email')
    const password :Locator = page.locator('#customer_password')
    await page.waitForTimeout(2000)
    await logIn.click()
    await email.fill("chatgpt1touse@gmail.com")
   await  password.fill("admin123")
   await page.waitForTimeout(5000)
    await page.locator("input[value='Sign In']").click();
    await page.waitForTimeout(100000)
    // await page.pause();
    // await page.waitForURL('https://sauce-demo.myshopify.com/account')
    // await expect(page).toHaveURL('https://sauce-demo.myshopify.com/account')
  
    
})

test("testing InValid username and password ", async ({page}) =>{
    await page.goto("https://sauce-demo.myshopify.com/")
    const logIn :Locator  =  page.locator('#customer_login_link').first()
    const email :Locator = page.locator('#customer_email')
    const password :Locator = page.locator('#customer_password')
    await page.waitForTimeout(2000)
    await logIn.click()
    await email.fill("test@xyz.com")
   await  password.fill("test@1234")
    await page.locator("input[value='Sign In']").click();
    const message :Locator = page.locator('.errors li')
    // await expect(message).toContainText('Incorrect email or password.')

    // await page.waitForURL('https://sauce-demo.myshopify.com/account')
    // await expect(page).toHaveURL('https://sauce-demo.myshopify.com/account')
  
    
})
