var cron = require("node-cron");
const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto("https://github.com");
  await page.screenshot({ path: "screenshots/github.png" });

  browser.close();
}

cron.schedule("* * * * *", function() {
  console.log("running a task every minute");
  run();
});
