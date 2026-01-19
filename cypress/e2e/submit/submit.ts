import {When, Then, Given} from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the submission page', () => {
    cy.visit('https://example.cypress.io/commands/actions');
});

When('I enter my valid text {string}', (couponCode: string) => {
    cy.get(`[id="couponCode1"]`).type(`${couponCode} {enter}`);
});

Then('the page should confirm a successful form submission', () => {
    cy.contains("Your form has been submitted!").should('be.visible');
});
