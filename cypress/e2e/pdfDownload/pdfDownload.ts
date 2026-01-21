import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import PdfDownloadDsl from "./pdfDownloadDsl";

let pageObject: PdfDownloadDsl

Given('I am visiting the website', () => {
    pageObject = new PdfDownloadDsl()
});
When('I download the pdf file', () => {
    pageObject.pressButtonToDownloadPdf();
});
Then('the pdf should have the expected content', () => {
    pageObject.validatePdfContent()
});