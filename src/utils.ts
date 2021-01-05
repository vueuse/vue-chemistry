import { Reactify, reactify } from '@vueuse/shared'

type PrependArgument<Fn, E> = Fn extends (...args: infer R) => infer T ? (that: E, ...args: R) => T : never

export function reactifyMethod<T extends Function>(fn: T): Reactify<PrependArgument<T, any>> {
  // @ts-expect-error
  return reactify((that: E, ...args: any) => fn.apply(that, args))
}

export const reactifyString: <T extends Function>(fn: T) => Reactify<PrependArgument<T, string>> = reactifyMethod
export const reactifyNumber: <T extends Function>(fn: T) => Reactify<PrependArgument<T, number>> = reactifyMethod
