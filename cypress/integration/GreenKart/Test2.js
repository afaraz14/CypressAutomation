/// <reference types="Cypress" />

describe('My First Test Suite', function()
{

it('My First Test Case',function(){

cy.visit(Cypress.env('url')+"/AutomationPractice/")
// checkboxes
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3'])

// Static dropdown (tag name will be 'select')
cy.get('select').select('option2').should('have.value','option2')

// Dynamic dropdown (when you type something and it gives list of selections)
cy.get('#autocomplete').type('ind')
// each -- iterate through an array like structure (arrays or objects with a lenght property)
cy.get('.ui-menu-item div').each(($el, index, $list) => {
    if($el.text()==='India')
    {
        $el.click()
    }
})
// autocomplete
cy.get('#autocomplete').should('have.value','India')

// Hide/Show visible text box
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

// Radio buttons ... radio button 2 checked
cy.get('[value = "radio2"]').check().should('be.checked')

})

})