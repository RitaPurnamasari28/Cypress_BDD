import {Given, When, And, Then} from '@badeball/cypress-cucumber-preprocessor';
Given('User navigate to demoblaze website', () => {
cy.visit('https://www.demoblaze.com/');
})

When('Click login menu', () => {
cy.get('#login2').click();
})

When('I enter login credentials', () => {
cy.contains('Log in').should('be.visible');
cy.get('#loginusername').type('example1@test.com');
//cy.get('#sign-username').type(`example${Date.now()}@mail.com`);
cy.get('#loginpassword').type('foobar');
})
Then('Click login button', () => {
cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
})
