# BDD starter kit

A starter kit for using behavior driven development and Cypress for end-to-end testing.

---

## Install and run

- `npm install`
- `npm start` - open cypress interactive mode
- `npm test` - run all tests headless (i.e., run in the terminal)

## Accessibility Testing (AXE Core Plugin):

To run accessibility tests on a page utilize the `AccessibilityHelpers` class.

```typescript
// Example:
AccessibilityHelpers.ActivateAxeCoreChecker("serious");
```

## Reading PDF Files:

This starter-kit includes an additional library that enhances cypress to allow reading pdf files.
To assert the content of pdf files, utilize the `PdfValidationHelpers` class.

```typescript
// Example:
PdfValidationHelper.ValidateDownloadedPdf("PDF_metadata.pdf", "contain", [
  "Testing",
  "PDF",
  "metadata",
]);
```

## Feature tags

`npx cypress run --env tags="@my-tag-name"`

## Recommended IED Extensions/Plugins
Adding these extensions to your IDE will greatly improve your experience using this starter kit.  

### JetBrains Plugins

* Cucumber +

### VS Code Extensions

* Cucumber 
* Cucumber (Gherkin) Full Support

To work properly, you will also need to add the following to your `.vscode` > `settings.json` file. 
```json
{
    "cucumber.features": ["cypress/e2e/**/*.feature"],
    "cucumber.glue": ["cypress/e2e/**/*.ts"],
    "cucumberautocomplete.steps": ["cypress/e2e/**/*.ts"],
    "cucumberautocomplete.syncfeatures": "cypress/e2e/**/*.feature"
}
```

