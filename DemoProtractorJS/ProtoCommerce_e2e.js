describe('ProtoCommerce demo', () => {
    function selectItem(titleItem) {
        element.all(by.tagName('app-card')).each(function (item) {
            item.element(by.css('h4 a')).getText().then(function (title) {
                // console.log(title);
                if (title == titleItem) {
                    item.element(by.buttonText('Add')).click();
                }
            });
        });
    }

    xit('Summit form and validate messages', () => {
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        element(by.name('name')).sendKeys('e2e testing');
        element(by.css(`input[name='email']`)).sendKeys('e2etesting@gmail.com');
        element(by.id('exampleInputPassword1')).sendKeys('12345678');
        element(by.css(`input[type='checkbox']`)).click();
        element(by.cssContainingText(`[id='exampleFormControlSelect1'] option`, 'Female')).click();
        element(by.id('inlineRadio2')).click();
        element(by.buttonText('Submit')).click().then(function () {
            element(by.css(`div[class*='alert-success']`)).getText().then(function (text) {
                console.log(text);
            });
        });

        element(by.name('name')).clear();
        element(by.name('name')).sendKeys('a').then(function () {
            element(by.css(`[class='alert alert-danger']`)).getText().then(function (text) {
                console.log(text);
            });

        });

    });

    it('Add product to cart', () => {
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        element(by.linkText('Shop')).click();
        selectItem('Samsung Note 8');
        selectItem('Blackberry');
        element(by.partialLinkText('Checkout')).getText().then(function (cart) {
            console.log(cart); // Checkout ( 2 ) \n (current)
           var res = cart.split('('); // [ 'Checkout ', ' 2 )\n', 'current)' ]
           expect(res[1].trim().charAt(0)).toBe('2');
        });
    });
});