require('chromedriver'); // puts the chromedriver binary on the PATH

const { Builder, By, until } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

driver.get('https://projectsbyif.com/');
driver.findElement(By.linkText('About')).click();
driver.wait(until.titleIs('The services we use should respect our rights - IF'), 1000);
driver.quit();
