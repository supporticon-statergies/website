import puppeteer from 'puppeteer';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

// Define the static routes to pre-render
const routesToPrerender = [
  '/',
  '/about',
  '/features',
  '/product',
  '/pricing',
  '/resources',
  '/events',
  '/sources',
  '/privacy-policy',
  '/terms',
  '/legal'
];

async function run() {
  console.log('Starting pre-rendering process...');
  
  // Start an express server to serve the static files from dist
  const app = express();
  
  // Serve static files, but if a file is not found, fallback to index.html (like a standard SPA server)
  app.use(express.static(DIST_DIR));
  app.use((req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });

  const server = app.listen(0, async () => {
    const port = server.address().port;
    console.log(`Static server listening on port ${port}`);

    try {
      const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      for (const route of routesToPrerender) {
        console.log(`Pre-rendering route: ${route}`);
        const page = await browser.newPage();
        
        // Set a custom user agent to trigger the bot detection logic in Preloader
        await page.setUserAgent('Googlebot/2.1 (+http://www.google.com/bot.html)');

        // Navigate to the route and wait for network idle to ensure everything is loaded
        const url = `http://localhost:${port}${route}`;
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
        
        // Wait an additional small amount to ensure React has fully rendered
        await new Promise(resolve => setTimeout(resolve, 500));

        // Get the fully rendered HTML
        const html = await page.evaluate(() => document.documentElement.outerHTML);

        // Prepare the output path
        const routePath = route === '/' ? '' : route;
        const dirPath = path.join(DIST_DIR, routePath);
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }

        // Write the HTML
        const filePath = path.join(dirPath, 'index.html');
        // Prepend DOCTYPE because outerHTML doesn't include it
        fs.writeFileSync(filePath, `<!DOCTYPE html>\n${html}`);
        console.log(`Saved ${filePath}`);

        await page.close();
      }

      await browser.close();
      console.log('Pre-rendering complete!');
    } catch (err) {
      console.error('Error during pre-rendering:', err);
      process.exit(1);
    } finally {
      server.close();
    }
  });
}

run();
