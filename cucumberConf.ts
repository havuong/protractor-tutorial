import { Config } from "protractor";
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
  directConnect: true,
  // set to "custom" instead of cucumber.
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  // require feature files

  capabilities: {
    browserName: 'chrome'
  },

  specs: [
    '../features/demo.feature'
  ],

  cucumberOpts: {
    format: 'json:./reports/cucumber_report.json',
    // require step definitions
    require: [
      './stepDefinitions/*.js'
    ],
    // tags: '@caltesting'
  },

  onComplete: () => {
    var options = {
      theme: 'bootstrap',
      jsonFile: './reports/cucumber_report.json',
      output: './reports/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome 74.0.3729",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };
    reporter.generate(options);
  }
}