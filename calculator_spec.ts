import {calculatorPO} from "./pageObjects/calculatorPO";
import { browser } from "protractor";

describe('Protractor Demo App', function() {
  let cal = new calculatorPO();
    function add(a, b) {
        cal.firstNumber.sendKeys(a);
        cal.secondNumber.sendKeys(b);
        cal.goButton.click();
    }
  
    beforeEach(function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
    });
  
    it('should have a history', function() {
      add(1, 2);
      add(3, 4);
  
      expect(cal.history.count()).toEqual(2);
  
      add(5, 6);
  
      expect(cal.history.last().getText()).toContain('1 + 2');
    });
  });