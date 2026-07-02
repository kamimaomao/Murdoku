import { chromium } from 'playwright';

const targetUrl = process.env.SMOKE_URL ?? 'http://127.0.0.1:64466/';
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  isMobile: true,
  viewport: { width: 390, height: 844 }
});

try {
  await page.addInitScript(() => window.localStorage.clear());
  await page.goto(targetUrl, { waitUntil: 'load' });
  await page.getByRole('heading', { name: '小镇入口' }).waitFor();

  await page.getByRole('button', { name: '第 1 行第 2 列' }).click();
  await page.locator('button[aria-label="第 1 行第 2 列"] .cell-object', { hasText: '马' }).waitFor();

  await page.getByRole('button', { name: 'Blanche' }).click();
  await page.getByText('她在第 4 列。').waitFor();

  await page.getByRole('button', { name: 'Aldous' }).click();
  await page.getByRole('button', { name: '第 4 行第 4 列' }).click();
  await page.getByRole('button', { name: '第 4 行第 4 列，Aldous' }).waitFor();

  const source = page.getByRole('button', { name: '第 4 行第 4 列，Aldous' });
  const target = page.getByRole('button', { name: '第 1 行第 1 列' });

  await page.getByRole('button', { name: 'Blanche' }).click();
  await source.click();
  await target.click();
  await page.getByRole('button', { name: '第 1 行第 1 列，Aldous' }).waitFor();

  await page.getByRole('button', { name: '第 1 行第 1 列，Aldous' }).click();
  await page.getByRole('button', { name: '第 1 行第 1 列' }).waitFor();

  await page.getByRole('button', { name: 'Aldous' }).click();
  await page.getByRole('button', { name: '提示' }).click();
  await page.getByRole('button', { name: '第 2 行第 2 列，Aldous' }).waitFor();
  await page.getByText('Aldous的位置已确认。').waitFor();

  await page.getByRole('button', { name: '答案' }).click();
  await page.getByRole('button', { name: '第 2 行第 2 列，Aldous' }).waitFor();
  await page.getByRole('button', { name: '第 1 行第 4 列，Blanche' }).waitFor();
  await page.getByRole('button', { name: '第 3 行第 1 列，Cornelius' }).waitFor();
  await page.getByRole('button', { name: '第 4 行第 3 列，Dahlia' }).waitFor();
  await page.getByText('答案已显示。').waitFor();

  await page.screenshot({ path: 'tests/smoke/mobile-smoke.png', fullPage: false });

  await page.getByRole('button', { name: /选择关卡/ }).click();
  await page.getByRole('button', { name: /选择第 6 关/ }).click();
  await page.getByRole('heading', { name: '无名之马' }).waitFor();
  await page.getByRole('button', { name: 'Aldous' }).click();
  await page.getByText('他靠近仙人掌。').waitFor();
} finally {
  await browser.close();
}
