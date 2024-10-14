import {test, expect} from "@playwright/test"
import { validRegisteInfo } from "../fixtures/userData"
import { RegisterPage } from "../pom/modules/ui/registerPage"

test.describe("register and login user", ()=>{
  test.beforeEach("visit app", async({page})=>{
    await page.goto("https://automaticityacademy.ngrok.app")
  })
  
  test("Registe new user", async({page})=>{
    await page.click("button:has-text('Sign up')");
    const registerPage = RegisterPage(page)



  })
})