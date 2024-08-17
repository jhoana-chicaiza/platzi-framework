import BasePage from "./BasePage"

export default class LoginPage extends BasePage{

    constructor(){
    super()
    this.navBar = "//div[@class='menu-wrapper']"
    this.inputEmail = "input[placeholder='Email']"
    this.inputPassword = "input[placeholder='Password']"
    this.submitButton = '(//button[1][@type="submit"])[1]'
    this.loginPageText = "//h2[contains(text(), 'Hi,')]"
    }

    async visit(){
        await page.goto('https://phptravels.org/login')
        await page.waitForXPath(this.navBar)
        const url =this .getUrl()
        console.log(url)
    }
    async login(email,password){
        await page.waitForselector(this.inputEmail)
        await this.type(this.inputEmail, email)
        await this.type(this.inputPassword, password)
        await this.click(this.submitButton)
    }

    async validateLogin(){
        await page.waitForXPath(this.loginPageText)
        await page.waitForXpath(this.navBar)
    }
}
