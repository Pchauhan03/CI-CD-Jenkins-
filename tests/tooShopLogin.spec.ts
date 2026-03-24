import{test , expect , Locator} from "@playwright/test"

test("testing for a new user who is trying to log in" , async ({page})=>{
    await page.goto("https://practicesoftwaretesting.com/auth/login")
    const signUp :Locator = page.locator('[data-test="register-link"]')
    const email:Locator = page.locator('#email')
    const password:Locator  = page.locator('#password')
    const LogIn :Locator = page.locator('.btnSubmit')
    await email.fill("test@gmail.com")
    await password.fill("test123")
    await LogIn.click();
    const msg : Locator=  page.locator(".help-block")
    console.log( await msg.innerText());
    expect(msg).toBeVisible();
    await page.waitForTimeout(3000)
})

test("testing for a new user who is signing up" , async ({page})=>{
    await page.goto("https://practicesoftwaretesting.com/auth/login")
    const signUp :Locator = page.locator('[data-test="register-link"]')
    const LogIn :Locator = page.locator('.btnSubmit')
    await signUp.click();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/register')
    const firstName = page.locator('#first_name')
    const lastName = page.locator('#last_name')
    const dob = page.locator('#dob')
    const street= page.locator('#street')
    const postalCode = page.locator('#postal_code')
    const city = page.locator('#city')
    const state = page.locator('#state')

    const country= page.locator('#country')
    const phone = page.locator('#phone')
    const email = page.locator('#email')
    const password= page.locator('#password')
    await firstName.fill("Prerna")
    await lastName.fill("Chauhan")
    await dob.fill("2002-10-03")
    await street.fill("lal kuan")
    await postalCode.fill("201009")
    await city.fill('ghazibad')
    await state.fill("Uttar Pradesh")
    await country.selectOption('India')
    await phone.fill("9456007630")
    await email.fill("chauhanprerna@gmail.com")
    await password.fill("@Pchauhan03")
    const bar = page.locator('.strength-bar div')
    const power = await bar.getAttribute('class')
    if(power ==='fill very-strong' || power ==='fill excellent')
    {
        const register = page.locator('[data-test="register-submit"]')
        await register.click();
    }
    await page.waitForTimeout(5000)
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login')


})

test("testing for a log in" , async ({page})=>{
    await page.goto("https://practicesoftwaretesting.com/auth/login")
    const signUp :Locator = page.locator('[data-test="register-link"]')
    const email:Locator = page.locator('#email')
    const password:Locator  = page.locator('#password')
    const LogIn :Locator = page.locator('.btnSubmit')
    await email.fill("chauhanprerna@gmail.com")
    await password.fill("@Pchauhan03")
    await LogIn.click();
    // const msg : Locator=  page.locator(".help-block")
    // console.log( await msg.innerText());
    // expect(msg).toBeVisible();
    expect(page).toHaveURL('https://practicesoftwaretesting.com/account')
    await page.waitForTimeout(3000)
})