import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8090/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
