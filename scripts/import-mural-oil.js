const fs = require('fs');
const path = require('path');

// Source directories
const muralSourceDir = '/Users/axue/Desktop/baba的画/mural';
const oilSourceDir = '/Users/axue/Desktop/baba的画/oil';

// Target directories
const muralTargetDir = '/Users/axue/workspace/baba/public/images/mural';
const oilTargetDir = '/Users/axue/workspace/baba/public/images/oil';

// Function to extract metadata from filename
function extractMetadata(filename, category) {
  let title = 'unnamed';
  let dimensions = '';
  let year = '';

  // Extract title from《》
  const titleMatch = filename.match(/《([^》]+)》/);
  if (titleMatch) {
    title = titleMatch[1];
  } else if (filename.includes('中华世纪坛壁画')) {
    title = '中华世纪坛壁画《中华千秋颂》';
  } else if (filename.includes('人民大会堂')) {
    title = '人民大会堂北大厅壁画《锦绣中华》';
  } else if (filename.includes('永恒的动力')) {
    title = '永恒的动力';
  } else if (filename.includes('和袁运甫')) {
    return null; // Skip non-artwork photos
  } else if (filename.includes('白山黑水')) {
    title = '白山黑水的肖像';
  } else if (filename === '郗海飞.JPG' || filename === 'IMG_4515.JPG' || filename.startsWith('_DSC')) {
    return null; // Skip non-artwork files
  }

  // Extract dimensions - various formats
  const dimPatterns = [
    /(\d+\.?\d*)\s*[xX×]\s*(\d+\.?\d*)\s*(?:cm|m)/i,
    /(\d+\.?\d*)\s*[xX×]\s*(\d+\.?\d*)/,
    /(\d+\.?\d*)cm\s*[xX×]\s*(\d+\.?\d*)cm/i,
    /(\d+\.?\d*)m\s*[xX×]\s*(\d+\.?\d*)m/i,
  ];

  for (const pattern of dimPatterns) {
    const match = filename.match(pattern);
    if (match) {
      const w = match[1];
      const h = match[2];
      // Check if it's in meters
      if (filename.includes(w + 'x' + h + 'm') || filename.includes(w + 'X' + h + 'm')) {
        dimensions = `${w}x${h}m`;
      } else if (filename.toLowerCase().includes('cm')) {
        dimensions = `${w}x${h}cm`;
      } else {
        // Guess based on size
        if (parseFloat(w) > 500 || parseFloat(h) > 500) {
          dimensions = `${w}x${h}cm`;
        } else if (parseFloat(w) > 50) {
          dimensions = `${w}x${h}cm`;
        } else {
          dimensions = `${w}x${h}m`;
        }
      }
      break;
    }
  }

  // Extract year
  const yearPatterns = [
    /(\d{4})年/,
    /(\d{4})\.\d+/,
    /(\d{4})/
  ];

  for (const pattern of yearPatterns) {
    const match = filename.match(pattern);
    if (match) {
      const y = parseInt(match[1]);
      if (y >= 1990 && y <= 2025) {
        year = y.toString();
        break;
      }
    }
  }

  return { title, dimensions, year };
}

// Process files in a directory
function processDirectory(sourceDir, targetDir, category, startId) {
  const entries = [];
  let id = startId;

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const files = fs.readdirSync(sourceDir).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext) && !f.startsWith('.');
  });

  // Track unique artworks to avoid duplicates
  const processedTitles = new Set();

  for (const file of files) {
    const metadata = extractMetadata(file, category);
    if (!metadata) continue;

    // Skip duplicates (same title) unless it's a detail image
    const titleKey = metadata.title.toLowerCase();
    if (processedTitles.has(titleKey) && !file.includes('局部')) {
      console.log(`Skipping duplicate: ${file}`);
      continue;
    }

    // For 局部 (detail) images, add suffix
    let finalTitle = metadata.title;
    if (file.includes('局部')) {
      const detailMatch = file.match(/局部[-\s]*(\d+)/);
      if (detailMatch) {
        finalTitle = `${metadata.title}（局部${detailMatch[1]}）`;
      } else {
        finalTitle = `${metadata.title}（局部）`;
      }
    }

    if (!file.includes('局部')) {
      processedTitles.add(titleKey);
    }

    // Copy file with sanitized name
    const ext = path.extname(file);
    const sanitizedName = `${category}_${String(id).padStart(3, '0')}${ext.toLowerCase()}`;
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, sanitizedName);

    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied: ${file} -> ${sanitizedName}`);

    entries.push({
      id: `${category}_${String(id).padStart(3, '0')}`,
      title: finalTitle,
      titleEn: finalTitle, // Will translate later
      year: metadata.year ? parseInt(metadata.year) : 0,
      dimensions: metadata.dimensions || '',
      category: category,
      imageUrl: `/images/${category}/${sanitizedName}`
    });

    id++;
  }

  return entries;
}

// Main
console.log('Processing mural images...');
const muralEntries = processDirectory(muralSourceDir, muralTargetDir, 'mural', 1);
console.log(`\nProcessed ${muralEntries.length} mural images`);

console.log('\nProcessing oil painting images...');
const oilEntries = processDirectory(oilSourceDir, oilTargetDir, 'oil', 1);
console.log(`\nProcessed ${oilEntries.length} oil painting images`);

// Read existing artworks.json
const artworksPath = '/Users/axue/workspace/baba/data/artworks.json';
const existingArtworks = JSON.parse(fs.readFileSync(artworksPath, 'utf-8'));

// Filter out placeholder mural and oil entries
const watercolorArtworks = existingArtworks.filter(a => a.category === 'watercolor');

// Combine all artworks
const allArtworks = [...watercolorArtworks, ...muralEntries, ...oilEntries];

// Write updated artworks.json
fs.writeFileSync(artworksPath, JSON.stringify(allArtworks, null, 2));
console.log(`\nUpdated artworks.json with ${allArtworks.length} total artworks`);
console.log(`- Watercolor: ${watercolorArtworks.length}`);
console.log(`- Mural: ${muralEntries.length}`);
console.log(`- Oil: ${oilEntries.length}`);

// Output entries for translation
console.log('\n=== Mural entries for translation ===');
muralEntries.forEach(e => console.log(`${e.id}: ${e.title}`));

console.log('\n=== Oil entries for translation ===');
oilEntries.forEach(e => console.log(`${e.id}: ${e.title}`));
