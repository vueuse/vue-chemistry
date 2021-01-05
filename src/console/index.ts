import { unref, watchEffect } from 'vue-demi'
import { unrefFn } from '../utils'

/*@__PURE__*/
export const log = unrefFn(console.log)
/*@__PURE__*/
export const warn = unrefFn(console.warn)
/*@__PURE__*/
export const dir = unrefFn(console.dir)
/*@__PURE__*/
export const table = unrefFn(console.table)
/*@__PURE__*/
export const debug = unrefFn(console.debug)
/*@__PURE__*/
export const info = unrefFn(console.info)
/*@__PURE__*/
export const error = unrefFn(console.error)

export function track(...args: any[]) {
  return watchEffect(() => {
    console.log(...args.map(unref))
  })
}
