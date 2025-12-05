import loginPage from "../pages/loginpage";

describe ('Login page tests', () => {
    beforeEach (() => {
        //const loginpage = new loginPage();
        loginPage.visit();
        cy.wait(10000);    
    });

    //valid credentials
    it ('Should submit username and password for successful login', () => {
        loginPage.fillLoginPage('gexejay877@mogash.com', 'Test@123');
        // cy.contains(`Welcome,${String}`).should('be.visible');
    })

    //invalid credentials
    it ('Should get error after submit invalid username and password for login', () => {
        loginPage.invalidCredentials('you@mogash.com', 'Testup@123');
    })
    
})