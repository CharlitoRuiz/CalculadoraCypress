const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://testsheepnz.github.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
