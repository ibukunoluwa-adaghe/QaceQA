import { login } from "../fixtures/testdata"
//let testdata;

describe('User Interface', () => {
  it('User login', () => {
    cy.visit('https://d-katsu-mfb-web-client-63bc62508615.herokuapp.com/')
    
    // cy.fixture('test data').then((data)=> {
    //   testdata = data;
    // })

    cy.wait(10000)
    //accept cookies
    cy.get('button[aria-label="Accept All Cookies"]').click()
    
    cy.wait(2000)

    // input username and password
    cy.get(login.emailinput).clear().type(login.emailtxt);
    cy.get(login.pwdinput).type(login.pwdtxt);
    cy.get(login.btninput).contains('Login').click()
  })
})