import { createWriteStream } from 'node:fs';
import { stat, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import archiver from 'archiver';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const exportDir = join(__dirname, '..', 'export');
const outputFile = join(exportDir, 'haltsec-static-bundle.zip');

async function ensureDir(dir) {
  try {
    await stat(dir);
  } catch {
    await mkdir(dir, { recursive: true });
  }
}

async function validateDistExists() {
  try {
    const distStat = await stat(distDir);
    if (!distStat.isDirectory()) {
      throw new Error(`${distDir} exists but is not a directory`);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Error: dist/ directory not found at ${distDir}`);
      console.error('Please run "npm run build" first to generate the production build.');
      process.exit(1);
    }
    throw error;
  }
}

async function createZipArchive() {
  try {
    await validateDistExists();
    await ensureDir(exportDir);

    const output = createWriteStream(outputFile);
    const archive = archiver('zip', {
      zlib: { level: 9 }
    });

    await new Promise((resolve, reject) => {
      output.on('close', () => {
        const sizeInMB = (archive.pointer() / 1024 / 1024).toFixed(2);
        console.log('\n✓ Static bundle created successfully!');
        console.log('  Location: ' + outputFile);
        console.log('  Size: ' + sizeInMB + ' MB (' + archive.pointer() + ' bytes)');
        console.log('\n📦 Bundle ready for distribution at dist/haltsec-static-bundle.zip\n');
        resolve(undefined);
      });

      archive.on('error', reject);
      archive.on('warning', (err) => {
        if (err.code === 'ENOENT') {
          console.warn('Warning:', err);
        } else {
          reject(err);
        }
      });

      archive.pipe(output);

      // Add the entire dist directory, but exclude the ZIP itself to avoid
      // self-referencing if it somehow already exists inside dist/
      archive.glob('**/*', {
        cwd: distDir,
        ignore: ['haltsec-static-bundle.zip'],
      });

      archive.finalize();
    });
  } catch (error) {
    console.error('Error creating static bundle:', error);
    process.exit(1);
  }
}

createZipArchive();
