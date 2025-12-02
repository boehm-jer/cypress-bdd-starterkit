import {When, Then, Given} from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the Google search page', () => {
    cy.visit('https://www.google.com');
});

When('I search for {string}', (searchTerm: string) => {
    cy.get('input[title=Search]').type(`${searchTerm} {enter}`);
});

Then('the page title should start with {string}', (searchTerm: string) => {
    cy.title().should('eq', `${searchTerm} - Google Search`);
});
