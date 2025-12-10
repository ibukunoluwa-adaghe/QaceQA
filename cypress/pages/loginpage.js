class loginPage {
    visit() {
        cy.visit('https://d-plat-katsu-web-client.sabi.am');
    }

    get email() {
       return cy.get('#\\:r0\\:')
    }

    get password() {
       return cy.get('#\\:r1\\:')
    }

    get submitButton() {
       return cy.get('button[type="submit"]')
    }

    get CookiesButton() {
        return cy.get('button[aria-label="Accept All Cookies"]')
    }

    get dashboard() {
        //return cy.get('h2.text-xl font-bold md:text-2xl undefined')
        return cy.contains('h2', 'Welcome');
    }


    clickCookies() {
        this.CookiesButton.click()
    }

    fillLoginPage (Email, Password) {
        this.clickCookies()
        this.email.type(Email);
        this.password.type(Password);
        this.submitButton.click()
        cy.wait(12000);
       this.dashboard.contains('Welcome,')
    }

    invalidCredentials (Email, Password) {
        this.clickCookies()
        this.email.type(Email);
        this.password.type(Password);
        this.submitButton.click()
    }
}

export default new loginPage();

