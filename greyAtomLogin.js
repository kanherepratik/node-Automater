const puppeteer = require("puppeteer");
const USERNAME_SELECTOR = "#j_username";
const PASSWORD_SELECTOR = "#j_password";
const BUTTON_SELECTOR = "#loginForm #login-button";
const ATTENDANCE_SELECTOR =
  "#attendence table.w-50 tr:last-child .btn.btn-large:not(.hide)";
const LOGOUT_SELECTOR =
  "#gts-bounce-nav ul.nav.pull-right li.dropdown:nth-child(3)";
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
  await page.waitForNavigation();
  await page.goto(
    "https://greyatom.greythr.com/v2/attendance/employee/markAttendance",
    {
      waitUntil: "networkidle2"
    }
  );
  await page.focus(ATTENDANCE_SELECTOR);
  await page.waitForSelector(LOGOUT_SELECTOR);
  await page.click(LOGOUT_SELECTOR);
  await page.click(
    ".dropdown-menu .gts-user-dropdown-details .user-footer .user-signout"
  );
  browser.close();
}

run();
