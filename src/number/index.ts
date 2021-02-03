import { reactify } from '@vueuse/shared'
import { Ref } from 'vue-demi'

export * from './generated'

/*@__PURE__*/
const _parseFloat = reactify(parseFloat)

/*@__PURE__*/
const _parseInt = reactify(parseInt)

/*@__PURE__*/
const _isNaN = reactify(isNaN)

/*@__PURE__*/
const _isFinite = reactify(isFinite)

export {
  _parseFloat as parseFloat,
  _parseInt as parseInt,
  _isNaN as isNaN,
  _isFinite as isFinite,
}

export function inc(a: Ref<number>, v = 1) { a.value += v }
export function dec(a: Ref<number>, v = 1) { a.value -= v }
