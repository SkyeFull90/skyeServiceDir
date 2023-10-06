const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ck9462',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
