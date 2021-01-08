import { ref } from 'vue-demi'
import { multiply, rs, is } from '../src/all'
import { $expect } from './utils'

describe('reactiveStr', () => {
  it('exported', () => {
    const a = ref(2)
    const b = ref(3)
    const c = rs`${a} x ${b} = ${multiply(a, b)}`

    $expect(is(c, '2 x 3 = 6'))

    a.value = 8
    b.value = 5

    $expect(is(c, '8 x 5 = 40'))
  })
})
