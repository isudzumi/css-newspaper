const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const postcssReporter = require("postcss-reporter");
const postcssNested = require('postcss-nested')
const styleLint = require("stylelint");

module.exports = {
  plugins: [
    postcssImport({
      plugins: [styleLint]
    }),
    postcssPresetEnv({autoprefixer: { grid: true }, stage: 0}),
    postcssReporter({ clearReportedMessages: true }),
    postcssNested
  ]
};
