import { MaybeRef } from '@vueuse/shared'
import { Ref, unref } from 'vue-demi'

export function set<T>(a: Ref<T>, v: T) { a.value = v }

export function get<T>(a: MaybeRef<T>) { return unref(a) }
