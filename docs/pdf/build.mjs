import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import path from 'node:path';
const dir = path.dirname(new URL(import.meta.url).pathname);
const docs = [
  ['gelistirici.html', 'Gelistirici-Gorev-Listesi.pdf', 'Geliştirici Görev Listesi'],
  ['pazarlama.html', 'Pazarlama-Rehberi.pdf', 'Pazarlama Rehberi'],
];
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
for (const [src, out, label] of docs) {
  const page = await browser.newPage();
  await page.goto('file://' + path.join(dir, 'src', src), { waitUntil: 'networkidle' });
  await page.pdf({
    path: path.join(dir, out), format: 'A4', printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true, headerTemplate: '<div></div>',
    footerTemplate: `<div style="width:100%;font-family:Inter,sans-serif;font-size:7.5pt;color:#8a92a3;padding:0 17mm;display:flex;justify-content:space-between"><span>${label}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
  });
  console.log('built', out);
}
await browser.close();
