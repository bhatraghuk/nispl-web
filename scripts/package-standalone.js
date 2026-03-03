const fs = require('fs')
const path = require('path')

function log(...args) { console.log('[package-standalone]', ...args) }

const cwd = process.cwd()
const srcStatic = path.join(cwd, '.next', 'static')
const srcPublic = path.join(cwd, 'public')
const destRoot = path.join(cwd, '.next', 'standalone')
const destNext = path.join(destRoot, '.next')

try {
  // Ensure destination directories exist
  fs.mkdirSync(destNext, { recursive: true })
  log('Created destination:', destNext)

  // Prefer fs.cpSync if available (Node 16.7+)
  if (typeof fs.cpSync === 'function') {
    if (fs.existsSync(srcStatic)) {
      fs.cpSync(srcStatic, path.join(destNext, 'static'), { recursive: true })
      log('Copied .next/static ->', path.join(destNext, 'static'))
    } else {
      log('Source not found:', srcStatic)
    }

    if (fs.existsSync(srcPublic)) {
      fs.cpSync(srcPublic, path.join(destRoot, 'public'), { recursive: true })
      log('Copied public ->', path.join(destRoot, 'public'))
    } else {
      log('Source not found:', srcPublic)
    }
  } else {
    // Fallback to manual recursive copy for older Node versions
    const copyRecursiveSync = (src, dest) => {
      if (!fs.existsSync(src)) return
      const stat = fs.statSync(src)
      if (stat.isDirectory()) {
        fs.mkdirSync(dest, { recursive: true })
        for (const entry of fs.readdirSync(src)) {
          copyRecursiveSync(path.join(src, entry), path.join(dest, entry))
        }
      } else {
        fs.copyFileSync(src, dest)
      }
    }

    if (fs.existsSync(srcStatic)) {
      copyRecursiveSync(srcStatic, path.join(destNext, 'static'))
      log('Copied .next/static ->', path.join(destNext, 'static'))
    } else {
      log('Source not found:', srcStatic)
    }

    if (fs.existsSync(srcPublic)) {
      copyRecursiveSync(srcPublic, path.join(destRoot, 'public'))
      log('Copied public ->', path.join(destRoot, 'public'))
    } else {
      log('Source not found:', srcPublic)
    }
  }

  log('Packaging completed successfully.')
  process.exit(0)
} catch (err) {
  console.error('[package-standalone] Error during packaging:', err)
  process.exit(1)
}
