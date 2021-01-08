import { MaybeRef } from '@vueuse/shared'
import { unref } from 'vue'

export function $expect(a: MaybeRef<boolean>) {
  expect(unref(a)).toBe(true)
}
