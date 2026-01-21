# BDD starter kit

## Install and run
* `npm install`
* `npm run test` - open cypress ui
* `npm run headless` - run in terminal

## Accessibility Testing (AXE Core Plugin):
To run accessibility tests on a page utilize the `AccessibilityHelpers` class. 
```typescript
// Example:
AccessibilityHelpers.ActivateAxeCoreChecker('serious')
```

## Reading PDF Files:
This starter-kit includes an additional library that enhances cypress to allow reading pdf files. 
To assert the content of pdf files, utilize the `PdfValidationHelpers` class.

```typescript
// Example:
PdfValidationHelper.ValidateDownloadedPdf('PDF_metadata.pdf','contain',['Testing', 'PDF', 'metadata'])
```
## Feature tags 
`npx cypress run --env tags="@my-tag-name"`