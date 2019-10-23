const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  let refreshes = 0;
  const start = process.env.LOG ? Date.now() : null;
  await page.goto(process.env.PAGE);
  let body = await page.content();
  while (!body.includes(process.env.TEXT)) {
    await page.reload();
    refreshes++;
    body = await page.content();
  }
  const end = process.env.LOG ? Date.now() : null;
  if (process.env.LOG) {
      console.log(`Time taken in seconds: ${ Math.ceil((end - start) / 1000) }`)
      console.log(`Total refreshes: ${ refreshes }`)
  }
  // await browser.close();
})();
