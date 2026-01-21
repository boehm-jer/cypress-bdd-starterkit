import {defineConfig} from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import {addCucumberPreprocessorPlugin} from '@badeball/cypress-cucumber-preprocessor';
// @ts-ignore
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import {resolve} from "path";
import {readFileSync, rmSync} from "fs";

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config);

    // Enable cypress preprocessor to use feature files
    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        }),
    );

    // Enable cypress to assert the contents of pdf files.
    on('task', {
        readPdf: async (path: string) => {
            const pdf = require('pdf-parse');
            const pdfPath = resolve('cypress/downloads/' + path);

            let dataBuffer = readFileSync(pdfPath);

            let stringified = dataBuffer.toString('base64');

            let data = await pdf(dataBuffer).catch((err: unknown) => {
                return {text: stringified};
            });

            return data.text;
        },
    });

    // Ensure the downloads folder is empty at the start of each new test.
    on('before:spec', spec => {
        const dir = './cypress/downloads';

        rmSync(dir, {recursive: true, force: true});
    });

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
