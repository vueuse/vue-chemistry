import fs from 'fs-extra'

async function generateMath() {
  const ignorelist = [
    'random',
  ]

  const rename = {
    log: 'logE',
  }

  const lines = [
    'import { reactify } from \'@vueuse/shared\'',
    '',
  ]

  Object.getOwnPropertyNames(Math)
    .filter(key => !ignorelist.includes(key))
    .forEach((key) => {
      // @ts-expect-error cast
      const value = Math[key]
      if (typeof value === 'function') {
        lines.push('/*@__PURE__*/')
        // @ts-expect-error cast
        lines.push(`export const ${rename[key] || key} = reactify(Math.${key})`)
      }
    })

  lines.push('')

  await fs.writeFile('src/math/generated.ts', lines.join('\n'), 'utf-8')
}

async function generateString() {
  const ignorelist: string[] = [
    'toString',
    'constructor',
    'valueOf',
  ]

  const lines = [
    'import { reactifyString } from \'../utils\'',
    '',
    'const __proto = String.prototype',
    '',
  ]

  Object.getOwnPropertyNames(String.prototype)
    .filter(key => !ignorelist.includes(key))
    .forEach((key) => {
      // @ts-expect-error cast
      const value = String.prototype[key]
      if (typeof value === 'function') {
        lines.push('/*@__PURE__*/')
        lines.push(`export const ${key} = reactifyString(__proto.${key})`)
      }
    })

  lines.push('')

  await fs.writeFile('src/string/generated.ts', lines.join('\n'), 'utf-8')
}

async function generateNumber() {
  const ignorelist: string[] = [
    'toString',
    'constructor',
    'valueOf',
  ]

  const lines = [
    'import { reactifyNumber } from \'../utils\'',
    '',
    'const __proto = Number.prototype',
    '',
  ]

  Object.getOwnPropertyNames(Number.prototype)
    .filter(key => !ignorelist.includes(key))
    .forEach((key) => {
      // @ts-expect-error cast
      const value = Number.prototype[KeyObject]
      if (typeof value === 'function') {
        lines.push('/*@__PURE__*/')
        lines.push(`export const ${key} = reactifyNumber(__proto.${key})`)
      }
    })

  lines.push('')

  await fs.writeFile('src/number/generated.ts', lines.join('\n'), 'utf-8')
}

generateMath()
generateString()
generateNumber()
