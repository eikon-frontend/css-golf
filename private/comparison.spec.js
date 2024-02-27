// @ts-check
const { test, expect } = require("@playwright/test");
import path from "path";

const compareImage = async (id, page) => {
  const currentPath = path.join(process.cwd(), `ex${id}/index.html`);
  const url = `file://${currentPath}`;
  await page.goto(url);

  await page.setViewportSize({
    width: 400,
    height: 300,
  });
  await page.locator("body").evaluate((element) => element.classList.add("ci"));

  expect(await page.screenshot()).toMatchSnapshot({
    name: `/refs/images/${id}.png`,
  });
};

test("ex1 est OK", async ({ page }) => {
  await compareImage(1, page);
});

test("ex2 est OK", async ({ page }) => {
  await compareImage(2, page);
});

test("ex3 est OK", async ({ page }) => {
  await compareImage(3, page);
});

test("ex4 est OK", async ({ page }) => {
  await compareImage(4, page);
});
