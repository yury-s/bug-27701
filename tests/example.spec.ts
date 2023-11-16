import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test.use({
  viewport: { width: 448, height: 664 },
  isMobile: true,
  browserName: 'webkit',
  launchOptions: {
    // executablePath: '/home/yurys/playwright-browsers/browser_patches/webkit/pw_run.sh'
  }
});

test('example', async ({ page }) => {
  page.on('request', (request) => {
    console.log('request', request.url());
  });
  page.on('requestfinished', async (request) => {
    console.log('done  ', request.url());
    // let file = new URL(request.url()).pathname;
    // if (file === '/')
    //   file = '/index.html';
    // file = 'site' + file;
    // console.log('file ', file);
    // await fs.promises.mkdir(path.dirname(file), { recursive: true });
    // await fs.promises.writeFile(file, await (await request.response())!.text());
  });
  console.log('\n\n\nstart loading');
//   await page.goto('https://remarkable-cranachan-7e0265.netlify.app', { waitUntil: 'domcontentloaded' });
  await page.goto('http://127.0.0.1:8080', { waitUntil: 'domcontentloaded' });  
  console.log('done loading');
});
