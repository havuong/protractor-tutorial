import { Given, When, Then } from "cucumber";

import { browser } from "protractor";
import { calculatorPO } from "../pageObjects/calculatorPO";
import chai from "chai";

var expect = chai.expect;
let cal = new calculatorPO();

// Given('I will navigate to Calc Site', async () => {
//     await browser.get('http://juliemr.github.io/protractor-demo/');
// });

Given('I will navigate to {string} Site', async (site) => {
    if (site == 'Protractor') {
        await browser.get('http://www.protractortest.org');
    } else if (site == 'Cal') {
        await browser.get('http://juliemr.github.io/protractor-demo/');
    }

});

When('I add two numbers {string} and {string}', async (string, string2) => {
    await cal.firstNumber.sendKeys(string);
    await cal.secondNumber.sendKeys(string2);
});

Then('the output displayed should be {string}', async (string) => {
    await cal.goButton.click();
    await cal.latestResult.getText().then(function (text) {

        expect(text).to.equal(string);
    })
})
