const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");

  const head = await page.$eval("h1", element => {
    return element.innerHTML;
  });
  console.log(head);
  await browser.close();
})();
