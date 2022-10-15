import { get as _get, reactify } from '@vueuse/shared'

export { reactify, reactifyObject, set, whenever, MaybeRef } from '@vueuse/shared'

/* @__PURE__ */
export const get = reactify(_get)
