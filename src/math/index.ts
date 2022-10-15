import type { MaybeRef } from '@vueuse/shared'
import { reactify } from '@vueuse/shared'

export * from './generated'

/* @__PURE__ */
export const negative = reactify((n: number) => -n)

/* @__PURE__ */
export const sum = reactify((...numbers: number[]) => {
  let result = 0
  numbers.forEach(i => result += i)
  return result
})

/* @__PURE__ */
export const multiply = reactify((...numbers: number[]) => {
  let result = 1
  numbers.forEach(i => result *= i)
  return result
})

/* @__PURE__ */
export const divide = reactify((a: number, b: number) => a / b)

/* @__PURE__ */
export const subtract = reactify((a: number, b: number) => a - b)

/* @__PURE__ */
export const mod = reactify((a: number, b: number) => a % b)

/* @__PURE__ */
const pureGcd = (a: number, b: number): number => {
  if (b === 0)
    return a
  else return pureGcd(b, a % b)
}

/* @__PURE__ */
export const gcd = reactify(pureGcd)

/* @__PURE__ */
export const lcm = (a: MaybeRef<number>, b: MaybeRef<number>) => {
  return divide(multiply(a, b), gcd(a, b))
}
