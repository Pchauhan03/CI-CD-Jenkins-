 import { test , expect, Locator , Page } from "@playwright/test" 
   test.describe("verify the  parallesim" ,  ()=>{
       test("test1 " , async({page , browserName})=>{
        //  if (browserName !== 'chromium') test.skip();
            await page.goto("https://www.saucedemo.com/") ; 
             const holder : Locator = page.locator("#user-name") ; 
             await holder.fill("standard_user") ; 
             const passholder : Locator = page.locator("#password") ;
            await passholder.fill("secret_sauce") ; 
            const buttonholder : Locator = page.locator("#login-button") ;
            await buttonholder.click() ;
            console.log("test1");
                    

       })

      test("test2 " , async({page , browserName})=>{
        if (browserName !== 'firefox') test.skip();
         await page.goto('https://demo.playwright.dev/todomvc/')
             const inputBox = page.locator('input.new-todo');
             const todoItems =page.getByTestId('todo-item');
                await inputBox.fill("Read");
                await inputBox.press('Enter');
                console.log("test2");
       })

       })