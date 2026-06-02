import puppeteer from 'puppeteer-core';
import { execSync } from 'child_process';

async function main() {
  // Find local Chrome executable
  let executablePath = '';
  try {
    // On Windows, look for Chrome or Edge
    const paths = [
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    ];
    for (const p of paths) {
      executablePath = p;
      // Simple check
      try {
        execSync(`powershell -Command "Test-Path '${p}'"`);
        console.log(`Found browser at: ${p}`);
        break;
      } catch (err) {
        // ignore
      }
    }
  } catch (e) {
    console.error(e);
  }

  if (!executablePath) {
    console.error("No browser executable found!");
    return;
  }

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1000 });
  
  page.on('console', msg => {
    console.log('BROWSER CONSOLE:', msg.text());
  });

  console.log("Navigating to http://localhost:5174/ ...");
  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle2' });
  
  // Wait 3 seconds for the 3D canvas and animation to settle
  await new Promise(r => setTimeout(r, 4000));
  
  const path = 'd:\\Project-Mainfiles\\portfolio\\2.0\\scratch\\lanyard_screenshot.png';
  await page.screenshot({ path });
  console.log(`Screenshot saved to ${path}`);
  
  await browser.close();
}

main().catch(console.error);
