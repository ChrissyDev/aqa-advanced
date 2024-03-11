import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: '',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 4000,
    retries: { runMode: 1, openMode: 1},
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
