import { copyFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, '..', 'dist');

async function createSpaFallback() {
  try {
    const indexPath = join(distDir, 'index.html');
    const fallbackPath = join(distDir, '404.html');
    
    // Verify index.html exists
    try {
      await stat(indexPath);
    } catch (error) {
      console.error(`Error: index.html not found at ${indexPath}`);
      console.error('Build may have failed. Please check the build output.');
      process.exit(1);
    }
    
    // Copy index.html to 404.html
    await copyFile(indexPath, fallbackPath);
    console.log('✓ Created 404.html fallback for SPA routing');
  } catch (error) {
    console.error('Error creating SPA fallback:', error);
    process.exit(1);
  }
}

createSpaFallback();
