import type { MaybeRef } from '@vueuse/shared'
import { unref } from 'vue-demi'
import { expect } from 'vitest'

export function $expect(a: MaybeRef<boolean>) {
  expect(unref(a)).toBe(true)
}
