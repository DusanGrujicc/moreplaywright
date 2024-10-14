import {test, expect} from "@playwright/test"
import { URLS , HEADING} from "../fixtures/pages"
import { RegisterPage } from "../pom/modules/ui/registerPage"
import { generateUserCredentials} from "../fixtures/userData"
import { LoginPage } from "../pom/modules/ui/loginPage"

let loginEmail,loginPassword
test.describe.configure({ mode: "serial" });

test.describe("register and login user", ()=>{
  test.beforeEach("visit app", async({page})=>{
    await page.goto("https://automaticityacademy.ngrok.app")
  })
  
  test("Register new user", async({page})=>{
    const {username, email, password} = generateUserCredentials(6)
   loginEmail = email
   loginPassword = password
    
   const registerPage = new RegisterPage(page)
    
    await page.goto(URLS.REGISTER)
    await expect(page.locator("h1")).toBeVisible();

    registerPage.register(username,email,password)

    await page.waitForURL(URLS.DASHBOARD);
    await expect(page.getByText(HEADING["DASHBOARD"])).toBeVisible();

  })
  test ("login with registered user", async({page})=>{
      await page.goto(URLS.LOGIN)
      await expect(page.locator("h1")).toHaveText(HEADING["LOGIN"]);

      const loginPage = new LoginPage(page)
      
      loginPage.login(loginEmail,loginPassword)
      
      await expect(page.getByText(HEADING["DASHBOARD"])).toBeVisible();

  })

})