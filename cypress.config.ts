import { defineConfig } from "cypress";
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8090/',
    env: {
      APIKEY: process.env.MY_API_KEY,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log('on', on);
      console.log('config', config);
    },
  },
});
