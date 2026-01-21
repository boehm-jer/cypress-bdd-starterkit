export default class PdfValidationHelpers {

    static ValidateDownloadedPdf(
        fileName: string,
        should: 'contain' | 'not.contain' = 'contain',
        expectations: string[],
    ) {
        expectations.forEach(expectation => {
            cy.task('readPdf', fileName, {timeout: 10000}).should(should, expectation);
        });
    }




}