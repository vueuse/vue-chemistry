import { reactify } from '@vueuse/shared'

export * from './generated'

/*@__PURE__*/
export const parseFloat = reactify(global.parseFloat)

/*@__PURE__*/
export const parseInt = reactify(global.parseInt)

/*@__PURE__*/
export const isNaN = reactify(global.isNaN)

/*@__PURE__*/
export const isFinite = reactify(global.isFinite)
