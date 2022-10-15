import type { MaybeRef, Reactified } from '@vueuse/shared'
import { reactify } from '@vueuse/shared'
import { unref } from 'vue-demi'

type PrependArgument<Fn, E> = Fn extends (...args: infer R) => infer T ? (that: E, ...args: R) => T : never

export type UnrefFn<T> = T extends (...args: infer A) => infer R
  ? (...args: { [K in keyof A]: MaybeRef<A[K]> }) => R
  : never

export function unrefFn<T extends Function>(fn: T): UnrefFn<T> {
  return function (this: any, ...args: any[]) {
    return fn.apply(this, args.map(i => unref(i)))
  } as UnrefFn<T>
}

export function reactifyMethod<T extends Function>(fn: T): Reactified<PrependArgument<T, any>, true> {
  // @ts-expect-error cast
  return reactify((that: any, ...args: any) => fn.apply(that, args))
}

export const reactifyString: <T extends Function>(fn: T) => Reactified<PrependArgument<T, string>, true> = reactifyMethod
export const reactifyNumber: <T extends Function>(fn: T) => Reactified<PrependArgument<T, number>, true> = reactifyMethod
