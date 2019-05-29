import { After, Before, Status } from 'cucumber';
import { browser } from 'protractor';

Before({ tags: "@caltesting" }, function () {
    console.log('Start caltesting');
    browser.manage().window().maximize();
});

After({ tags: "@caltesting" }, function () {
    console.log('Done caltesting');
});

Before({ tags: "@protractorsite" }, function () {
    console.log('Start protractorsite');
});

After({ tags: "@protractorsite" }, function () {
    console.log('Done protractorsite');
});

After( async function (scenario) {
    console.log('Done protractorsite');
    if(scenario.result.status === Status.FAILED){
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,'image/png');
    }
});
