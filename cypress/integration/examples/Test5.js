/// <reference types="Cypress" />

describe('My Second Test Suite', function()
{
it('My SecondTest Case', function() {

cy.visit(Cypress.env('url')+"/AutomationPractice/")

// show method in jquery for hidden elements
// cy.get('div.mouse-hover-content').invoke('show')

// Cypress have ability to maniuplate the DOM
// Yes you can traverse to sibling with next() and it works only on get
// Mouse hover events are not supported in cypress.  Alternatively use jquery or force click
cy.contains('Top').click({ force:true})
cy.url().should('include','top')

})


})