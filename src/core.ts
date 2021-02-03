import { reactify, get as _get } from '@vueuse/shared'

export { reactify, reactifyObject, set, when, MaybeRef } from '@vueuse/shared'

/*@__PURE__*/
export const get = reactify(_get)
