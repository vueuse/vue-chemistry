import { reactify } from '@vueuse/shared'
import { Ref } from 'vue'

export * from './generated'

/*@__PURE__*/
export const parseFloat = reactify(global.parseFloat)

/*@__PURE__*/
export const parseInt = reactify(global.parseInt)

/*@__PURE__*/
export const isNaN = reactify(global.isNaN)

/*@__PURE__*/
export const isFinite = reactify(global.isFinite)

export function inc(a: Ref<number>, v = 1) { a.value += v }
export function dec(a: Ref<number>, v = 1) { a.value -= v }
