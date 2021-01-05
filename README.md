# @vueuse/reactified

**WIP**

Reactive utility wrappers powered by [`reactify`](https://vueuse.js.org/?path=/story/utilities--reactify) in [`VueUse`](https://github.com/antfu/vueuse)

## Install

```bash
npm i @vueuse/reactified
```

## Usage

```js
import { sqrt, pow, sum, sin, round } from '@vueuse/reactified/math'
import { toString, toUpperCase } from '@vueuse/reactified/string'
import { parseInt, parseFloat } from '@vueuse/reactified/number'
import { stringify, parse } from '@vueuse/reactified/json'
import { isFalsy } from '@vueuse/reactified/boolean'
import { log } from '@vueuse/reactified/console'
```

## Example

```js
import { ref } from 'vue'
import { log } from '@vueuse/reactified/console'
import { sqrt, pow, sum } from '@vueuse/reactified/math'
import { stringify, parse } from '@vueuse/reactified/json'

// Math       _________
//       c = √ a² + b²
const a = ref(3)
const b = ref(4)
const c = sqrt(sum(pow(a, 2), pow(b, 2)))
log(c) // 5

a.value = 5
b.value = 12
log(c) // 13


// JSON
//
const obj = ref({ foo:'bar' })
const str = stringify(obj)
const clone = parse(str)

log(str) // {"foo":"bar"}

obj.value.no = 42
log(str) // {"foo":"bar","no":42}
```
