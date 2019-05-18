describe('ProtoCommerce demo', () => {
    it('Summit form and validate messages', () => {
        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name('name')).sendKeys('e2e testing');
        element(by.css(`input[name='email']`)).sendKeys('e2etesting@gmail.com');
        element(by.id('exampleInputPassword1')).sendKeys('12345678');
        element(by.css(`input[type='checkbox']`)).click();
        element(by.cssContainingText(`[id='exampleFormControlSelect1'] option`, 'Female')).click();
        element(by.id('inlineRadio2')).click();
        element(by.buttonText('Submit')).click();

    });
});

