import { execSync } from 'child_process'
import { dirname } from 'path'
import fg from 'fast-glob'
import fs from 'fs-extra'

execSync('npx rimraf dist', { stdio: 'inherit' })
console.log('Build ESM...')
execSync('npx tsc --outDir dist/esm', { stdio: 'inherit' })
console.log('Build CJS...')
execSync('npx tsc --module commonjs --outDir dist/cjs', { stdio: 'inherit' })

console.log('Copying...')
fg.sync('dist/esm/**/*.d.ts')
  .forEach((i) => {
    const target = i.replace('/esm/', '/')
    fs.ensureDirSync(dirname(target))
    fs.copySync(i, target)
  })

fs.copySync('package.json', 'dist/package.json')
fs.copySync('README.md', 'dist/README.md')
fs.copySync('LICENSE', 'dist/LICENSE')

console.log('Done.')
