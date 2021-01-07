import { reactifyNumber } from '../utils'

const __proto = Number.prototype

/*@__PURE__*/
export const toExponential = reactifyNumber(__proto.toExponential)
/*@__PURE__*/
export const toFixed = reactifyNumber(__proto.toFixed)
/*@__PURE__*/
export const toPrecision = reactifyNumber(__proto.toPrecision)
/*@__PURE__*/
export const toLocaleString = reactifyNumber(__proto.toLocaleString)
