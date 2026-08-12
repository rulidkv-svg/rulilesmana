import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceImage = './src/assets/images/pwa_icon_1786498365147.jpg';
const publicDir = './public';

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function generateIcons() {
  console.log('Generating PWA icons from:', sourceImage);

  await sharp(sourceImage)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));

  await sharp(sourceImage)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));

  await sharp(sourceImage)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  await sharp(sourceImage)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  await sharp(sourceImage)
    .resize(16, 16)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));

  console.log('PWA icons successfully generated in /public directory.');
}

generateIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
