import type { MaybeRef } from '@vueuse/shared'
import { reactify } from '@vueuse/shared'

import type { ComputedRef, Ref } from 'vue-demi'
import { computed, unref } from 'vue-demi'

/* @__PURE__ */
export const toBoolean = reactify((a: any) => !!a)

/* @__PURE__ */
export const not = reactify((a: any) => !a)

/* @__PURE__ */
export const isTruthy = toBoolean

/* @__PURE__ */
export const isFalsy = not

/**
 * Equal, "==". Use `is` for strictly equal.
 */
export function eq<L, R = L>(a: MaybeRef<L>, b: MaybeRef<R>) {
  // eslint-disable-next-line eqeqeq
  return computed(() => unref(a) == unref(b))
}

/**
 * Strictly equal, "==="
 */
export function is<L, R = L>(a: MaybeRef<L>, b: MaybeRef<R>) {
  return computed(() => unref(a) === unref(b))
}

/**
 * Strictly not equal, "!=="
 */
export function isNot<L, R = L>(a: MaybeRef<L>, b: MaybeRef<R>) {
  return computed(() => unref(a) !== unref(b))
}

/**
 * Not equal, "!="
 */
export function noEq<L, R = L>(a: MaybeRef<L>, b: MaybeRef<R>) {
  // eslint-disable-next-line eqeqeq
  return computed(() => unref(a) != unref(b))
}

export function and<T>(...args: MaybeRef<T>[]) {
  return computed(() => args.every(i => unref(i)))
}

export function or<T>(...args: MaybeRef<T>[]) {
  return computed(() => args.some(i => unref(i)))
}

/**
 * Ternary operator, "cond ? true : false"
 */
export function ternary<T, F = T>(condition: Ref<boolean>, t: MaybeRef<T>, f: MaybeRef<F>) {
  return computed(() => condition.value ? unref(t) : unref(f)) as ComputedRef<T | F>
}
