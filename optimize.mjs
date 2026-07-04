import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = './src/assets';

async function generateAllMobileImages() {
  const images = ['cacus.webp', 'monstera.webp', 'aleo_vera.webp', 'pilea.webp'];
  
  for (const file of images) {
    const inputPath = path.join(assetsDir, file);
    if (!fs.existsSync(inputPath)) continue;
    
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const outputPath = path.join(assetsDir, `${basename}-mobile.webp`);

    console.log(`Processing ${file}...`);
    let pipeline = sharp(inputPath);
    pipeline = pipeline.resize(100, null, { withoutEnlargement: true });

    await pipeline.webp({ quality: 80 }).toFile(outputPath);
    console.log(`Saved ${outputPath}.`);
  }
}

generateAllMobileImages().catch(console.error);
