import {ImpactValue} from 'axe-core';

export default class AccessibilityHelpers {
    static ActivateAxeCoreChecker(impactValue: ImpactValue = 'critical'): void {
        cy.injectAxe();
        cy.checkA11y(null, {includedImpacts: [impactValue]});
    }
}
