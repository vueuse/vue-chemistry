import { ref } from 'vue'
import { rs, is, ternary, set, dec, multiply, sum, toUpperCase, stringify, pow, sqrt } from '../src/all'
import { $expect } from './utils'

describe('examples', () => {
  it('math', () => {
    const a = ref(3)
    const b = ref(4)
    const c = sqrt(sum(pow(a, 2), pow(b, 2)))
    $expect(is(c, 5))

    set(a, 5) // shorthand for a.value = 5
    set(b, 12)
    $expect(is(c, 13))
  })

  it('json', () => {
    const obj = ref<any>({ foo: 'bar' })
    const str = stringify(obj)
    // const clone = parse<any>(str)

    $expect(is(str, '{"foo":"bar"}'))

    obj.value.no = 42

    $expect(is(str, '{"foo":"bar","no":42}'))
  })

  it('string 1', () => {
    const name = ref('foo')
    const message = rs`Hello ${toUpperCase(name)}!`
    $expect(is(message, 'Hello FOO!'))
    set(name, 'Anthony')
    $expect(is(message, 'Hello ANTHONY!'))
  })

  it('string 2', () => {
    const x = ref(9)
    const y = ref(9)
    const z = ref(7)
    const equation = rs`${x} x ${y} + ${z} = ${sum(multiply(x, y), z)}`
    $expect(is(equation, '9 x 9 + 7 = 88'))
    set(x, 98)
    dec(z)
    $expect(is(equation, '98 x 9 + 6 = 888'))
    set(x, 987)
    dec(z)
    $expect(is(equation, '987 x 9 + 5 = 8888'))
  })

  it('string 3', () => {
    const mode = ref('light')

    const isDark = is(mode, 'dark')
    const icon = rs`mdi-${ternary(isDark, 'moon', 'sun')}`

    $expect(is(icon, 'mdi-sun'))

    set(mode, 'dark')

    $expect(is(icon, 'mdi-moon'))
  })
})
