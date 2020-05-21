/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('My First Test Suite', function()
{
    before(function() {
// runs once before all tests in the block
        cy.fixture('jsonexample').then (function(data)
        {
            this.data=data
        })

    })

it('My First Test Case',function(){
    
const homePage=new HomePage()
const productPage=new ProductPage()
    // url will be save under 'cypress.json'
    cy.visit(Cypress.env('url')+"/angularpractice/")

// we can use either one to enter type the name
//cy.get(':nth-child(1) > .form-control').type(this.data.name)
//cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
homePage.getEditBox().type(this.data.name)
homePage.getGender().select(this.data.gender)
homePage.getTwoWayDataBinding().should('have.value',this.data.name)
homePage.getEditBox().should('have.attr','minlength','2')
homePage.getEntrepreneaur().should('be.disabled')
// after this  all the test will run with wait time 8 seconds, this will overwrite using Cypress.json centralized one
Cypress.config('defaultCommandTimeout', 10000)
homePage.getShopTab().click()

//cy.get('select').select(this.data.gender)
// 1. Verify the name is enterd on the page 'Bob', will it show in the 'Two-Way Data Binding example:...'
//cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
// 2. Verify now we will verify min length of the field
//cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
// 3. Verify Entrepreneur (disabled) on the page
//cy.get('#inlineRadio3').should('be.disabled')
// 4. Click on the 'shop' ... will land on products page
// then select product on this page, but we don't know which order they will be displayed
// base upon the text we have to select 'Add'
// we have to right one fuction when you pass the product name, automatically that function should 
// take your product name and add it
// selectProduct is from folder: support --> commands.js

//cy.pause() ......... you can pause the test in between and investigate

//cy.get(':nth-child(2) > .nav-link').click()


this.data.productName.forEach(function(element) {
    cy.selectProduct(element)
});
//cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
productPage.checkOutButton().click()
//productPage.finalCheckOut().click()
var sum = 0

// now we need to add the amount in the shoping cart and match it total to make sure it's showing correctly
cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>
{
    //first we will extract the values showing, then we will sum it
    //cy.log($el.text())
    // split the string of the amount and grab it
    // we can use var becaue we will be re-using it
    const amount=$el.text()
    var res= amount.split(" ")
    res = res[1].trim()
    // convert the sting to a number in javascript (wrap that string to a 'Number')
    //sum=sum+res
    sum = Number(sum)+Number(res)
    
})
// this is java function needed to printout the sum
.then(function()
{
    cy.log(sum)
})
// get the Total amount to compare if it's matching with the Sum
cy.get('h3 strong').then(function(element)
{
    const amount=element.text()
    var res= amount.split(" ")
    var total= res[1].trim()
    // we will use assertions -- check cypress documents online for additional info
    expect(Number(total)).to.equal(sum)
})
cy.contains('Checkout').click()
cy.get('#country').type('Pakistan')
cy.get('.suggestions > ul > li > a').click()
cy.get('#checkbox2').click({force:true})
cy.get('input[type="submit"]').click()
// will get an error if we use this:
//cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-)')
// we will use similar scenario as we used in Test1.js with some modification
cy.get('.alert').then(function(element)
{
    const actualText=element.text()
        // will use assertion
    expect(actualText.includes("Success")).to.be.true
})

    
})


})