import { ref } from 'vue-demi'
import { is, set, negative, sum, multiply, divide, subtract, mod, gcd, lcm } from '../src'
import { $expect } from './utils'

describe('reactiveMath', () => {
  it('negative', () => {
    const a = ref(9)
    const c = negative(a)
    $expect(is(c, -9))
    $expect(is(a, 9))

    set(a, 10)
    $expect(is(c, -10))
  })

  it('sum', () => {
    const a = ref(1)
    const b = ref(2)
    const c = ref(3)
    const d = sum(a, b, c)
    $expect(is(d, 6))

    set(a, 10)
    set(b, 15)
    $expect(is(d, 28))
  })

  it('subtract', () => {
    const a = ref(1)
    const b = ref(2)
    const c = subtract(a, b)
    $expect(is(c, -1))

    set(a, 20)
    set(b, 15)
    $expect(is(c, 5))
  })

  it('multiply', () => {
    const a = ref(1)
    const b = ref(2)
    const c = ref(3)
    const d = multiply(a, b, c)
    $expect(is(d, 6))

    set(a, 4)
    set(b, 5)
    $expect(is(d, 60))
  })

  it('divide', () => {
    const a = ref(1)
    const b = ref(2)
    const c = divide(a, b)
    $expect(is(c, 0.5))

    set(a, 20)
    set(b, 10)
    $expect(is(c, 2))
  })

  it('mod', () => {
    const a = ref(15)
    const b = ref(9)
    const c = mod(a, b)
    $expect(is(c, 6))
    $expect(is(b, 9))

    set(a, 3)
    set(b, 2)
    $expect(is(c, 1))
  })

  it('gcd', () => {
    const a = ref(9)
    const b = ref(15)
    const c = gcd(a, b)
    $expect(is(c, 3))
    $expect(is(a, 9))

    set(a, 14)
    set(b, 21)
    $expect(is(c, 7))
    $expect(is(a, 14))
  })

  it('lcm', () => {
    const a = ref(2)
    const b = ref(3)
    const c = lcm(a, b)
    $expect(is(c, 6))

    set(a, 7)
    set(b, 14)
    $expect(is(c, 14))
  })
})
