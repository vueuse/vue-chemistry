import { computed, unref } from 'vue-demi'
import { reactifyString } from '../utils'

export * from './generated'

/* @__PURE__ */
export const toString = reactifyString(Object.prototype.toString)

export function reactiveStr(strings: TemplateStringsArray, ...args: any[]) {
  return computed(() => String.raw(strings, ...args.map(unref)))
}

/* @__PURE__ */
export const rs = reactiveStr
