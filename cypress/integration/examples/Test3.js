/// <reference types="Cypress" />

describe('My First Test Suite', function()
{

it('My First Test Case',function(){

    cy.visit(Cypress.env('url')+"/AutomationPractice/")

// popup buttons validation
// cypress auto accepts alerts and pop ups
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()

// Cypress have capability to listen for browser event, basicall when Alert is open
// in general there's an event called window Alert that triggers on the browser
// window:alert (when there's alert on page, this event will automatically triggerd)
// we are firing that event using Cypress to get access to that alert
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
// Invoke: invoke a function on the previously yielded subject
// removeAttr will remove the target so when button is clicked page will not open in new window.
cy.get('#opentab').invoke('removeAttr','target').click()
// now if you need to go back to the previous page
// using browser navigation methond
// now validate how we are on the right page after going back
// we need to retrive the current url that is active
cy.url().should('include', 'rahulshettyacademy')
cy.go('back')

})

})