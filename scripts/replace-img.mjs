import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const files = globSync('src/**/*.tsx');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (content.includes('<img') && !content.includes('Image from')) {
    // Only import if we are replacing an img that is not the logo
    // Wait, the Image component also handles logo.
    
    let hasChanges = false;
    
    if (content.includes('<img')) {
      content = content.replace(/<img/g, '<Image');
      hasChanges = true;
    }
    
    if (hasChanges) {
      // Find the right place to put the import
      const importMatches = [...content.matchAll(/^import /gm)];
      let lastImportIndex = 0;
      if (importMatches.length > 0) {
        const lastMatch = importMatches[importMatches.length - 1];
        lastImportIndex = content.indexOf('\n', lastMatch.index) + 1;
      }
      
      // Calculate relative path to src/components/Image
      const depth = file.split('/').length - 2; // src/ is 1, so src/pages/ is 2 - 2 = 0 (./), src/pages/landing/ is 3 - 2 = 1 (../)
      let relPath = depth === 0 ? './components/Image' : '../'.repeat(depth) + 'components/Image';
      if (file.startsWith('src/components/')) {
        relPath = './Image';
      }
      
      content = content.slice(0, lastImportIndex) + `import Image from '${relPath}';\n` + content.slice(lastImportIndex);
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    }
  }
}
