import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';
export class calculatorPO {
    firstNumber: ElementFinder;
    secondNumber: ElementFinder;
    goButton: ElementFinder;
    history: ElementArrayFinder;

    constructor() {
        this.firstNumber = element(by.model('first'));
        this.secondNumber = element(by.model('second'));
        this.goButton = element(by.id('gobutton'));
        this.history = element.all(by.repeater('result in memory'));
    }
}

