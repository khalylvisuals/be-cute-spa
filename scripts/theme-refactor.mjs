import fs from 'fs';
import path from 'path';

const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });

  return arrayOfFiles;
};

const files = getAllFiles('./src');

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // We are going from dark mode to light mode for the main layout.
  // Previously: 
  // bg-deep-wine -> bg-maroon-900
  // bg-dark-burgundy -> bg-maroon-700
  // text-ivory -> text-ink
  
  // So currently, most sections have bg-maroon-900 or bg-maroon-700.
  // And text is text-ink.
  // But Header and Footer SHOULD be bg-maroon-900.
  
  const isHeaderFooter = file.includes('Header.tsx') || file.includes('Footer.tsx') || file.includes('FooterEn.tsx') || file.includes('HeaderEn.tsx');

  if (isHeaderFooter) {
    // In Header and Footer, text should be light (ivory-50) because bg is maroon-900.
    content = content.replace(/text-ink/g, 'text-ivory-50');
    // Ensure bg is maroon-900/700 (it should already be from previous step)
  } else {
    // In all other files, page bg is cream-100, card bg is ivory-50.
    // Replace bg-maroon-900 with bg-cream-100
    content = content.replace(/bg-maroon-900/g, 'bg-cream-100');
    // Replace bg-maroon-700 with bg-ivory-50
    content = content.replace(/bg-maroon-700/g, 'bg-ivory-50');
    
    // Gradients
    content = content.replace(/from-maroon-900/g, 'from-cream-100');
    content = content.replace(/to-maroon-900/g, 'to-cream-100');
    content = content.replace(/via-maroon-900/g, 'via-cream-100');

    content = content.replace(/from-maroon-700/g, 'from-ivory-50');
    content = content.replace(/to-maroon-700/g, 'to-ivory-50');
    content = content.replace(/via-maroon-700/g, 'via-ivory-50');

    // Also some text might have been left as ivory-50 in previous sed, need to ensure it's ink on light bg.
    // Wait, earlier I did: sed 's/text-dark-text/text-ivory-50/g' -> this was dark text turning into ivory. It should be ink!
    content = content.replace(/text-ivory-50/g, 'text-ink');
  }

  // General fixes:
  // "text-gold-500-500" was an error from my previous find/replace. Let's fix that.
  content = content.replace(/text-gold-500-500/g, 'text-gold-500');
  content = content.replace(/bg-gold-500-500/g, 'bg-gold-500');
  content = content.replace(/border-gold-500-500/g, 'border-gold-500');
  content = content.replace(/hover:text-gold-500-500/g, 'hover:text-gold-500');
  content = content.replace(/hover:bg-gold-500-500/g, 'hover:bg-gold-500');
  content = content.replace(/hover:border-gold-500-500/g, 'hover:border-gold-500');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});

console.log('Theme refactor complete.');
