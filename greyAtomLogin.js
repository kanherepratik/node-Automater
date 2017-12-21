const puppeteer = require("puppeteer");
const USERNAME_SELECTOR = "#j_username";
const PASSWORD_SELECTOR = "#j_password";
const BUTTON_SELECTOR = "#loginForm #login-button";
const URL = "https://greyatom.greythr.com";

async function run() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(URL, {
    waitUntil: "networkidle2"
  });

  await page.focus(USERNAME_SELECTOR);
  await page.keyboard.type("GRE-31");

  await page.focus(PASSWORD_SELECTOR);
  await page.keyboard.type("amrut123#K");

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation({ timeout: 0 });
  const a = await page.evaluate(() => {
    document.querySelector(".dashboard-tabs");
  });

  console.log(a);
}

run();
