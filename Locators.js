describe('Locators demo', function () {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var operators = element.all(by.model('operator').element(by.css("option")));
    // var operators = element.all(by.tagName('option'));
    var goButton = element(by.id('gobutton'));

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    function calc(a, b, c) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        operators.each(function (item) {
            item.getAttribute('value').then(function (value) {
                if (value == c) {
                    item.click();
                }
            })
        })
        goButton.click();
    }

    beforeEach(function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should calculate a and b', function () {
        calc(10, 5, 'ADDITION');
        calc(10, 5, 'DIVISION');
        calc(10, 5, 'MODULO');
        calc(10, 5, 'MULTIPLICATION');
        calc(10, 5, 'SUBTRACTION');

        element.all(by.repeater("result in memory")).each(function (item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function (resultText) {
                console.log(resultText);
            })
        })
    });

});
