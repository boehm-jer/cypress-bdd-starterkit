import {Given, Then} from '@badeball/cypress-cucumber-preprocessor';
import AccessibilityHelpers from "../helpers/accessibilityHelpers";

Given(`I am visiting {string}`,(website: string) => {
    cy.visit(`https://${website}`);
})

Then('accessibility checks should pass', () => {
    AccessibilityHelpers.ActivateAxeCoreChecker('serious')
});

