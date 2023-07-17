import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor';
Given('I navigate to demoblaze website', () => {
cy.visit('https://www.demoblaze.com/');
})

When('Click Sign Up Menu', () => {
cy.get('#signin2').click();
})
When('I enter login credentials', () => {
cy.contains('Sign up').should('be.visible');
cy.contains('Username:').should('be.visible');
cy.contains('Password:').should('be.visible');
cy.get('#sign-username').type('example1@test.com');
cy.get('#sign-password').type('foobar');
})
Then('Click Sign Up button', () => {
cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
})
