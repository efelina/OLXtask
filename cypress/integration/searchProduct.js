describe('Search product', () => {
    

    it('Search chosen product', ()=>{
        cy.visit('https://olx.pl')
        cy.get('#onetrust-banner-sdk').should('be.visible')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('#headerSearch')
        .click()
        .type('JavaScript{enter}')
        cy.get('tbody').contains('JavaScript').first().click()
        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes(`Cannot set properties of undefined (setting 'status')`)) {
              return false
            }        
          })
        
    })
})