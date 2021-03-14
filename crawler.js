const webdriver = require("selenium-webdriver"),
  By = webdriver.By;
const chrome = require("selenium-webdriver/chrome");

async function ibovespa() {
  const driver = new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();

  var titulo = "",
    pontos = "",
    percentual = "";

  try {
    await driver.get("http://www.b3.com.br/pt_br/");

    await driver
      .findElement(By.id("ibovTitle"))
      .getText()
      .then(function (text) {
        titulo = text;
      });

    await driver
      .findElement(By.id("ibovPct"))
      .getText()
      .then(function (text) {
        percentual = text;
      });

    await driver
      .findElement(By.id("ibovPts"))
      .getText()
      .then(function (text) {
        pontos = text;
      });
  } finally {
    await driver.quit();
    return {titulo, percentual, pontos};
  }
}

module.exports = ibovespa;
