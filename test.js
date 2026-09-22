const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));

  await page.goto('http://localhost:8000/index.html');

  // By-pass login
  await page.evaluate(() => {
     document.getElementById('login-view').style.display = 'none';
     document.getElementById('app-view').style.display = 'block';
  });

  await page.waitForTimeout(2000); // Give it some time
  console.log("Successfully opened and bypassed login.");

  await browser.close();
})();
