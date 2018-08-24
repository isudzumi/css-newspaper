const autoPrefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const postcssReporter = require("postcss-reporter");
const styleLint = require("stylelint");

module.exports = {
  plugins: [
    postcssImport({
      plugins: [styleLint]
    }),
    postcssPresetEnv(autoPrefixer({ grid: true })),
    postcssReporter({ clearReportedMessages: true })
  ]
};
