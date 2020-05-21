/// <reference types="Cypress" />

describe('My First Test Suite', function()
{

it('My First Test Case',function(){

//cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.visit(Cypress.env('url')+"/seleniumPractise/#/")

cy.get('.search-keyword').type('ca')
cy.wait(2000)
// total 4 items will display with search with 'ca'
// selenium get hi url in browser, cypress get acts like findElement of selenium
// use should assersion 
// use :visible will help only to retrieve items that are only showing
cy.get('.product:visible').should('have.length',4)

//as is cypress command you can give name of .products to variable name productLocator
cy.get('.products').as('productLocator')

// first we get the parent block then child block
// if we use .find after cy.get products, it will only find in the products block area

//.product will be replaced with @productLocator
//cy.get('.products').find('.product').should('have.length',4)
cy.get('@productLocator').find('.product').should('have.length',4)
// now out of these we need to pick 2nd item so Capsicum is 2nd index then click Add to Cart
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
//sf will be prininted on your console
//it will executed as the we run this, because it's a java command but cy.log is cypress command and it will run is sequesnce
//so we have to manually decalre when this should be printed
//to do that we wrote this at the end of line 27 so it will run after this line executed .click().then(function()
{
    console.log('sf')
})
// now look for Cashews and add to cart
// each -- iterate through an array like structure (arrays or objects with a lenght property)
cy.get('@productLocator').find('.product').each(($el, index, $list) => {
// h4 to select heading 4 products
const textVeg = $el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
$el.find('button').click()
}
})
//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')

//capture logo
//text is not a cypress command
//cypress support jquery(here text is a method)
cy.get('.brand').then(function(logoelement)
{
    //will execute at the end
    cy.log(logoelement.text())
})
const logo = cy.get('.brand')

})


} )