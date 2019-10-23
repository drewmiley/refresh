const puppeteer = require('puppeteer');

const TEXT_TO_FIND = '1000';
const LOG = true;
const PAGE = 'http://localhost:3002';

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  let refreshes = 0;
  const start = LOG ? Date.now() : null;
  await page.goto(PAGE);
  let body = await page.content();
  while (!body.includes(TEXT_TO_FIND)) {
    await page.reload();
    refreshes++;
    body = await page.content();
  }
  const end = LOG ? Date.now() : null;
  if (LOG) {
      console.log(`Time taken in seconds: ${ Math.ceil((end - start) / 1000) }`)
      console.log(`Total refreshes: ${ refreshes }`)
  }
  // await browser.close();
})();
