const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000" // Default local URL
  }
});
