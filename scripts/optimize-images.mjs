import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

const widths = [480, 960, 1600];

async function optimizeImages() {
  let totalHeroSize = 0;
  let totalCardsSize = 0;

  async function processDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile() && /\.(png|jpe?g)$/i.test(entry.name) && !/-\d{3,4}\.(png|jpe?g)$/i.test(entry.name)) {
        console.log(`Processing: ${entry.name}`);
        
        // Convert to AVIF and WebP for each width
        for (const width of widths) {
          const nameWithoutExt = path.parse(entry.name).name;
          const relativePath = path.relative(IMAGES_DIR, dir);
          
          const outputBase = path.join(IMAGES_DIR, relativePath, `${nameWithoutExt}-${width}`);
          
          // Original format resized (fallback)
          const isJpeg = /\.jpe?g$/i.test(entry.name);
          const ext = isJpeg ? 'jpg' : 'png';
          
          const s = sharp(fullPath).resize({ width });
          
          const avifBuffer = await s.clone().avif({ quality: 50 }).toBuffer();
          const webpBuffer = await s.clone().webp({ quality: 60 }).toBuffer();
          const fallbackBuffer = isJpeg 
            ? await s.clone().jpeg({ quality: 60 }).toBuffer() 
            : await s.clone().png({ quality: 60, compressionLevel: 9 }).toBuffer();

          await fs.writeFile(`${outputBase}.avif`, avifBuffer);
          await fs.writeFile(`${outputBase}.webp`, webpBuffer);
          await fs.writeFile(`${outputBase}.${ext}`, fallbackBuffer);

          // Check budgets for the largest size (1600w for hero, 960w for cards usually)
          const minSize = Math.min(avifBuffer.length, webpBuffer.length);
          if (entry.name.includes('hero') && width === 1600) {
            totalHeroSize += minSize;
            if (minSize > 180 * 1024) {
              console.error(`ERROR: Hero image ${entry.name} exceeds 180KB budget at ${width}w (Size: ${(minSize/1024).toFixed(2)}KB)`);
              process.exit(1);
            }
          } else if ((entry.name.includes('service') || entry.name.includes('gallery')) && width === 960) {
            totalCardsSize += minSize;
            if (minSize > 90 * 1024) {
              console.error(`ERROR: Card image ${entry.name} exceeds 90KB budget at ${width}w (Size: ${(minSize/1024).toFixed(2)}KB)`);
              process.exit(1);
            }
          }
        }
      }
    }
  }

  await processDirectory(IMAGES_DIR);
  
  const totalWeight = totalHeroSize + totalCardsSize;
  console.log(`Optimization complete. Total hero size tracked: ${(totalHeroSize/1024).toFixed(2)} KB`);
  console.log(`Total cards size tracked: ${(totalCardsSize/1024).toFixed(2)} KB`);
  console.log(`Total tracked weight: ${(totalWeight/1024).toFixed(2)} KB`);
  
  if (totalWeight > 900 * 1024) {
    console.error(`ERROR: Total image weight exceeds 900KB budget.`);
    process.exit(1);
  }
}

optimizeImages().catch(console.error);