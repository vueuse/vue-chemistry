import { ref } from 'vue'
import { multiply } from '../src/math'
import { rs } from '../src/string'

describe('reactiveStr', () => {
  it('exported', () => {
    const a = ref(2)
    const b = ref(3)
    const c = rs`${a} x ${b} = ${multiply(a, b)}`

    expect(c.value).toBe('2 x 3 = 6')

    a.value = 8
    b.value = 5
    expect(c.value).toBe('8 x 5 = 40')
  })
})
