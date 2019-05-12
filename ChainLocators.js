describe('Chain locators demo', function () {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    beforeEach(function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should add four and six', function () {
        add(4, 6);

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (resultText) {
            console.log(resultText);
            expect(resultText).toEqual('10');
        })
    });

});