import {defineConfig} from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import {addCucumberPreprocessorPlugin} from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import * as process from "process";

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config);

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        }),
    );

    return config;
}

let config = defineConfig({
    e2e: {
        specPattern: '**/*.feature',
        setupNodeEvents,
    },
});

if (process.env.CYPRESS_PROJECT_ID)
    config.projectId = process.env.CYPRESS_PROJECT_ID;

export default config;
