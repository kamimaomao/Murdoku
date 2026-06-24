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
  const sourceBox = await source.boundingBox();
  const targetBox = await target.boundingBox();

  if (!sourceBox || !targetBox) {
    throw new Error('Unable to locate board cells for drag smoke test.');
  }

  await page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2, { steps: 8 });
  await page.mouse.up();
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

  await page.getByRole('button', { name: /20/ }).waitFor();
  await page.getByRole('button', { name: '6 简单', exact: true }).click();
  await page.getByRole('heading', { name: '无名之马' }).waitFor();
  await page.getByRole('button', { name: 'Aldous' }).click();
  await page.getByText('他靠近仙人掌。').waitFor();
} finally {
  await browser.close();
}
