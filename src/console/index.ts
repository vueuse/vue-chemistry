import { reactify } from '@vueuse/shared'

/*@__PURE__*/
export const log = reactify(console.log)
/*@__PURE__*/
export const warn = reactify(console.warn)
/*@__PURE__*/
export const dir = reactify(console.dir)
/*@__PURE__*/
export const table = reactify(console.table)
/*@__PURE__*/
export const debug = reactify(console.debug)
/*@__PURE__*/
export const info = reactify(console.info)
/*@__PURE__*/
export const error = reactify(console.error)
