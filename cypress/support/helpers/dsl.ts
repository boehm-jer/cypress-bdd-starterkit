export default abstract class DSL {
    constructor(visitPage: boolean = true) {
        if (visitPage) {
            cy.window().then(async page => {

                this.visit();
            });
        }
    }

    protected abstract visit(): void;

}