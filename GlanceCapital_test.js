Feature('Login');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://dev.glancecapital.com');
    I.wait(2);
    I.click('//a[@class="btn btn-link"]');
    I.wait(2);
    I.fillField('//input[@id="input-email"]',"osman.saral+70@gmail.com");
    I.fillField('//input[@id="input-password"]',"123qweASD");
    I.click('//button[@id="btn-continue"]');
    I.wait(2);
    I.click('//button[text()="Move Money"]');
    I.click('//div[text()="Send Money"]');
    I.click('//div[@class="react-select__indicators css-1wy0on6"]');
    I.wait(2);
    I.click('//div[@id="react-select-2-listbox"]');
    I.wait(1);
    I.click('//button[text()="Next"]');
    I.fillField('//input[@class="form-control"]',"1");
    I.fillField('//input[@id="note"]',"Test Note");
    I.click('//button[text()="Next"]');







});
