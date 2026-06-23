import { chromium } from 'playwright';

const targetUrl = process.env.SMOKE_URL ?? 'http://127.0.0.1:64466/';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  isMobile: true,
  viewport: { width: 390, height: 844 }
});

try {
  await page.goto(targetUrl, { waitUntil: 'load' });
  await page.getByRole('heading', { name: '无名之马' }).waitFor();
  await page.getByRole('button', { name: 'Aldous' }).click();
  await page.getByRole('button', { name: '第 5 行第 6 列' }).click();
  await page.getByRole('button', { name: '第 5 行第 6 列，Aldous' }).waitFor();
  await page.screenshot({ path: 'tests/smoke/mobile-smoke.png', fullPage: false });
} finally {
  await browser.close();
}
