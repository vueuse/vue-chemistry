import { reactify } from '@vueuse/shared'

/*@__PURE__*/
export const stringify = reactify(JSON.stringify)

/*@__PURE__*/
export const parse = reactify(JSON.parse)
