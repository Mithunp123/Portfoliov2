const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const lanyardPath = path.join(__dirname, 'src', 'components', 'Lanyard.tsx');
const originalContent = fs.readFileSync(lanyardPath, 'utf8');

async function main() {
  let executablePath = '';
  const browserPaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  for (const p of browserPaths) {
    if (fs.existsSync(p)) {
      executablePath = p;
      break;
    }
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
  await page.setViewport({ width: 1280, height: 1100 });

  // Test Z = 0.1, 0.2, 0.4, 0.6, 0.8
  const zValues = [0.1, 0.2, 0.4, 0.6, 0.8];

  for (const z of zValues) {
    console.log(`Testing Z = ${z}...`);
    
    let newContent = originalContent.replace(
      "import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';",
      "import { useGLTF, useTexture, Environment, Lightformer, Text } from '@react-three/drei';"
    );

    const insertIndex = newContent.indexOf('<mesh geometry={nodes.clip.geometry}');
    if (insertIndex === -1) {
      console.error("Clip not found!");
      break;
    }

    const codeToInsert = `
              {/* White Banner */}
              <mesh position={[0, -1.45, ${z}]} scale={[2.3, 0.22, 1]}>
                <planeGeometry />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.98} />
              </mesh>

              {/* Left side text: @ Software Engineer */}
              <Text
                position={[-0.98, -1.45, ${z + 0.005}]}
                fontSize={0.095}
                color="#f46c38"
                anchorX="left"
                anchorY="middle"
                fontWeight="bold"
              >
                @
              </Text>
              <Text
                position={[-0.90, -1.45, ${z + 0.005}]}
                fontSize={0.095}
                color="#0c0c0c"
                anchorX="left"
                anchorY="middle"
                fontWeight="bold"
              >
                Software Engineer
              </Text>

              {/* Right side text: @ Mithun_P */}
              <Text
                position={[0.54, -1.45, ${z + 0.005}]}
                fontSize={0.095}
                color="#f46c38"
                anchorX="left"
                anchorY="middle"
                fontWeight="bold"
              >
                @
              </Text>
              <Text
                position={[0.62, -1.45, ${z + 0.005}]}
                fontSize={0.095}
                color="#0c0c0c"
                anchorX="left"
                anchorY="middle"
                fontWeight="bold"
              >
                Mithun_P
              </Text>
    `;

    newContent = newContent.substring(0, insertIndex) + codeToInsert + newContent.substring(insertIndex);

    fs.writeFileSync(lanyardPath, newContent, 'utf8');

    // Wait for Vite
    await new Promise(r => setTimeout(r, 1500));

    try {
      await page.goto('http://localhost:5174/', { waitUntil: 'networkidle2' });
      await new Promise(r => setTimeout(r, 4000));
      
      const screenshotPath = `C:\\Users\\mithu\\.gemini\\antigravity\\brain\\ddd0e4c7-5002-4363-a878-bd1d20594011\\scratch\\screenshot_3d_z_${z}.png`;
      await page.screenshot({ path: screenshotPath });
      console.log(`Saved screenshot for Z = ${z}`);
    } catch (e) {
      console.error(e);
    }
  }

  // Restore original content
  fs.writeFileSync(lanyardPath, originalContent, 'utf8');
  await browser.close();
  console.log("Done!");
}

main().catch(console.error);
