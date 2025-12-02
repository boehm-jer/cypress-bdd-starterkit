import {When, Then, Before} from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
    cy.visit('https://duckduckgo.com/');
    cy.injectAxe()
})

When('I visit duckduckgo.com', () => {
    cy.checkA11y(null, null, null, true)
});

Then('I should see a search bar', () => {
    cy.get('input').should('have.attr', 'placeholder', 'Search the web without being tracked');

    assert.deepEqual({}, {});
});
