/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('My Second Test Suite', function() {
    it('My SecondTest Case', function() {

    // landing URL  
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // from Frame page ...iframe id="courses-iframe"
    cy.frameLoaded("#courses-iframe")
    // href attribute to identify CSS ... there are 7 found results
    // eq to pass the index which we need to select
    cy.iframe().find("a[href*='mentorship']").eq(0).click()

    // after landed on Menteroship page
    // validate how many packages we have, BRONZE and PLATINUM .......2 elements matching
    cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)



    })

})