describe('Protractor Alert steps', function () {

    it('Open NonAngular js website Alerts', function () {

        browser.waitForAngularEnabled(false);
        browser.get('http://qaclickacademy.com/practice.php');
        element(by.id('confirmbtn')).click().then(function () {
            browser.sleep(5000);
        })
        browser.switchTo().alert().accept();

        element(by.id('confirmbtn')).click().then(function () {
            browser.sleep(5000);
        })
        browser.switchTo().alert().dismiss();

    })

})
