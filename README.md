# BDD starter kit

## Install and run
`npm install`
`npm run test` - open cypress ui
`npm run headless` - run in terminal

## Feature tags
`npx cypress run --env tags="@my-tag-name"`

## AXE Core Plugin:
To run accessibility tests on a page utilize the `AccessibilityHelpers` class. 
```typescript
// Example:
AccessibilityHelpers.ActivateAxeCoreChecker('serious')
```
