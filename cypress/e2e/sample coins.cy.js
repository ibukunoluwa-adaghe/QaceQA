describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
});

it.only('first', function() {
  cy.visit('https://stable-core-nexus.vercel.app/signin')
  cy.get('#email').click();
  cy.get('#email').type('ibukun.adaghe@sabi.am');
  cy.get('#password').click();
  cy.get('#password').type('SabiAdmin@123');
  cy.get('#root button.w-full').click();
  
});

it('Page load', function() {
  // cy.visit('https://stable-core-nexus.vercel.app/signin')
  // cy.get('#email').click();
  // cy.get('#email').type('ibukun.adaghe@sabi.am');
  // cy.get('#password').click();
  // cy.get('#password').type('SabiAdmin@123');
  // cy.get('#root button.w-full').click();
  cy.get('#root a[href="/dashboard"]').click();
  cy.get('#root a[href="/dashboard/entities"] span').click();
  cy.get('#root a[href="/dashboard/wallets"] span').click();
  cy.get('#root a[href="/dashboard/vaults"]').click();
  cy.get('#root a[href="/dashboard/transactions"] span').click();
  cy.get('#root a[href="/dashboard/ledgers"]').click();
  cy.get('#root a[href="/dashboard/compliance"] span').click();
  
});