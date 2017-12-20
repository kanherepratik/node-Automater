const puppeteer = require("puppeteer");
const USERNAME_SELECTOR = "#email";
const PASSWORD_SELECTOR = "#pass";
const BUTTON_SELECTOR = "#loginbutton input[type=submit]";

async function run() {
  const browser = await puppeteer.launch({ headless: false, slowMo: 250 });
  const page = await browser.newPage();

  await page.goto("https://www.facebook.com", {
    waitUntil: "networkidle2"
  });

  await page.focus(USERNAME_SELECTOR);
  await page.keyboard.type("kanherepratik@gmail.com");

  await page.focus(PASSWORD_SELECTOR);
  await page.keyboard.type("amrut123&KANHERE");

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation();
  //   await page.screenshot({ path: "screenshots/github.png" });
  browser.close();
}

run();
