import { ref } from 'vue-demi'
import { is, set, mod, gcd, lcm } from '../src'
import { $expect } from './utils'

describe('reactiveMath', () => {
  it('math', () => {
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

  it('math', () => {
    const a = ref(15)
    const b = ref(9)
    const c = mod(a, b)
    $expect(is(c, 6))
    $expect(is(b, 9))

    set(a, 3)
    set(b, 2)
    $expect(is(c, 1))
  })

  it('math', () => {
    const a = ref(2)
    const b = ref(3)
    const c = lcm(a, b)
    $expect(is(c, 6))

    set(a, 7)
    set(b, 14)
    $expect(is(c, 14))
  })
})
