import {Given, Then} from '@badeball/cypress-cucumber-preprocessor';
import AccessibilityHelpers from "../../support/helpers/accessibilityHelpers";
import {ImpactValue} from "axe-core";

Given(`I am visiting {string}`,(website: string) => {
    cy.visit(`https://${website}`);
})

Then(`{string} accessibility checks should pass`, (severity: ImpactValue = 'critical') => {
    AccessibilityHelpers.ActivateAxeCoreChecker(severity)
});

