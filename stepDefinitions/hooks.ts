import { After, Before } from 'cucumber';
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
