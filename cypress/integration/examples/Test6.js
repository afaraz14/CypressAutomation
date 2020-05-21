/// <reference types="Cypress" />

describe('My Second Test Suite', function()
{
it('My SecondTest Case', function() {

cy.visit(Cypress.env('url')+"/AutomationPractice/")

cy.get('#opentab').then(function(el)
{
    const url=el.prop('href')
    cy.log(url)
    cy.visit(url)

    // This exercise:
    // 1. can not use visit for multiple domains
    // 2. how to get attribute value and act upon it

})

})


})