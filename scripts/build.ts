import { execSync } from 'child_process'

execSync('npx rimraf dist', { stdio: 'inherit' })
execSync('npx tsc --outDir dist/esm', { stdio: 'inherit' })
execSync('npx tsc --module commonjs --outDir dist/cjs', { stdio: 'inherit' })
