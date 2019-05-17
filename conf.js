exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Alert.js'],
  capabilities: {
    browserName: 'firefox'
  },
  jasmineNodeOpts: {defaultTimeoutInterval: 50000} // fix - Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
}