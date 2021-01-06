# ⚗️ Vue Chemistry

**WIP**

The ~~science~~ that deals with the [properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties), [composition](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api), and structure of states, the transformations they undergo during [reactions](https://v3.vuejs.org/guide/reactivity.html#what-is-reactivity). A library providing reactive JavaScript utility wrappers which are powered by [`reactify`](https://vueuse.js.org/?path=/story/utilities--reactify) from [VueUse](https://github.com/antfu/vueuse).

## Install

```bash
npm i vue-chemistry
```

## Usage

```js
import { sqrt, pow, sum, sin, round } from 'vue-chemistry/math'
import { toString, toLowerCase } from 'vue-chemistry/string'
import { parseInt, parseFloat } from 'vue-chemistry/number'
import { parse, stringify } from 'vue-chemistry/json'
import { isFalsy } from 'vue-chemistry/boolean'
import { log } from 'vue-chemistry/console'
```

## Example

```js
import { ref } from 'vue'
import { get } from 'vue-chemistry'
import { dec } from 'vue-chemistry/number'
import { log } from 'vue-chemistry/console'
import { stringify, parse } from 'vue-chemistry/json'
import { rs, toUpperCase } from 'vue-chemistry/string'
import { sqrt, pow, sum, multiply } from 'vue-chemistry/math'

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

// String
//         rs - Reactive String
const name = ref('oo')
const message = rs`Hello ${toUpperCase(name)}!`
log(message) // Hello FOO!
set(name, 'Anthony')
log(message) // Hello ANTHONY!

// String 2
//
const x = ref(9)
const y = ref(9)
const z = ref(7)
const equation = rs`${x} x ${y} + ${z} = ${sum(multiply(x, y),z)}`
log(equation) //   9 x 9 + 7 = 88
set(x, 98)
dec(z)
log(equation) //  98 x 9 + 6 = 888
set(x, 987)
dec(z)
log(equation) // 987 x 9 + 5 = 8888
```
