import PdfValidationHelper from "../../support/helpers/pdfValidationHelpers";
import DSL from "../../support/helpers/dsl";

export default class PdfDownloadDsl extends DSL {

    protected visit(): void {
        cy.visit(`https://commons.wikimedia.org/wiki/File:PDF_metadata.pdf`);
        cy.contains("File:PDF metadata.pdf").should('be.visible');
        cy.get(`[aria-label="Loading"]`).should('not.exist');
    }
    public pressButtonToDownloadPdf(){
        cy.get(`[title="Download all sizes"]`).click();
        cy.get('a').contains('Full resolution').click()
        // Wait for the download to complete
        cy.wait(1500); // *** Only use static wait methods for example purposes.
        // In a real life scenario, the web app being tested should have a way of dynamically indicating when the download has started and when it is complete.
    }

    public validatePdfContent(){
        PdfValidationHelper.ValidateDownloadedPdf('PDF_metadata.pdf','contain',['Testing', 'PDF', 'metadata'])
        PdfValidationHelper.ValidateDownloadedPdf('PDF_metadata.pdf','not.contain',['milk','cheese','eggs'])
    }
}