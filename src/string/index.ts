import { reactifyString } from '../utils'

export * from './generated'

/*@__PURE__*/
export const toString = reactifyString(Object.prototype.toString)
