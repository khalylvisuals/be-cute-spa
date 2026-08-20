import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const logoPath = path.join(process.cwd(), 'public', 'logo.png');

async function optimizeLogo() {
  const image = sharp(logoPath);
  const metadata = await image.metadata();
  
  // resize to a max width of 240, keep it png but compressed
  const buffer = await image
    .resize(480, null, { withoutEnlargement: true }) // 2x for retina
    .png({ quality: 80, compressionLevel: 9 })
    .toBuffer();
    
  fs.writeFileSync(logoPath, buffer);
  console.log(`Logo optimized: ${(buffer.length / 1024).toFixed(2)} KB`);
}

optimizeLogo();
