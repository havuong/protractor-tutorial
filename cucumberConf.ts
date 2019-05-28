import { Config } from "protractor";

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
    '../features/demo.feature' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      './stepDefinitions/*.js' // accepts a glob
    ],
    tags: '@caltesting'
  }
}