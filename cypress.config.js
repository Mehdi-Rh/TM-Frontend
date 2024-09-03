const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl: process.env.REACT_APP_API_URL || "http://localhost:4000";
    }
  }
});
