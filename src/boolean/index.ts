import { reactify } from '@vueuse/shared'

/*@__PURE__*/
export const boolean = reactify((a: any) => !!a)

/*@__PURE__*/
export const invert = reactify((a: any) => !a)

/*@__PURE__*/
export const isTruthy = boolean

/*@__PURE__*/
export const isFalsy = invert
