# BDD starter kit

## Install and run
`npm install`
`npm run test` - open cypress ui
`npm run headless` - run in terminal

## Feature tags
`npx cypress run --env tags="@my-tag-name"`

## AXE Core Plugin:
To run accessibility tests on a page you need to visit the page and inject the axe core cypress plugin.

```typescript
Before(() => {
    cy.visit('https://duckduckgo.com/');
    cy.injectAxe()
})
```
