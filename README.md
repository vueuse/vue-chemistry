<p align="center">
  <img src='./res/hero.png' alt="Vue Chemisty" width="600">
</p>

> The ~~science~~ that deals with the [properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties), [composition](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api), and structure of states, the transformations they undergo during [reactions](https://v3.vuejs.org/guide/reactivity.html#what-is-reactivity).

Reactified JavaScript functions for Vue, powered by [`reactify`](https://vueuse.js.org/?path=/story/utilities--reactify) from [VueUse](https://github.com/antfu/vueuse).

## Reactified? What?

In JavaScript, for most of the time, you are dealing with **procedural** functions. Which means after the calculation/transformation, the result won't know relationships with its sources, for example

```js
function sum(x, y) {
  return x + y
}

let a = 1
let b = 2

let c = sum(a, b) // c = a + b = 3

a = 2

console.log(c) // still 3, not 4
```

On the other hand, in Spreadsheets apps like Microsoft Excel or Google Sheets, formulas are always up-to-update whenever their source changes.

<img src="./res/reactivity-spreadsheet.gif" width="300"></video>

[Vue's reactivity system](https://v3.vuejs.org/guide/reactivity.html#what-is-reactivity) is a way to approach the reactiveness in JavaScript. In the [Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api), we are kinda mixing the procedural and reactivity together (which is good and flexible). But what it will be like to have a complete reactive developing experience?

**Introducing Vue Chemistry**, a set of reactified JavaScript functions letting you enjoy the pure reactiveness!

From the example above, now we can have:

```js
import { set } from 'vue-chemistry'
import { sum } from 'vue-chemistry/math'
import { log } from 'vue-chemistry/console'

const a = ref(1)
const b = ref(2)

let c = sum(a, b) // c = a + b = 3

set(a, 2) // shorthand for a.value = 2

log(c) // it's 4 (2 + 2)!
```

### Cool, but, how is that possible?

We are basically making functions accepting [`Ref`](https://v3.vuejs.org/api/refs-api.html#refs) as their arguments and then wrapper their result with [`computed`](https://v3.vuejs.org/guide/reactivity-computed-watchers.html#computed-and-watch). This makes them automatically collect dependency sources and re-evaluate when the sources get changed. Note that the `ComputedRef` is also a `Ref` which means the operations are chainable!

An example for comparsion:

```ts
// procedural function
function sum(x: number, y: number) {
  return x + y
}
```

```ts
import { computed, unref, Ref, ComputedRef } from 'vue'

// reactified function
function sum(
  x: number | Ref<number>,
  y: number | Ref<number>
): ComputedRef<number> {
  return computed(() => unref(x) + unref(y))
}
```

If you want to convert a normal function into a "reactified" one, you can use `reactify()` function. The source code can be found [here](https://github.com/antfu/vueuse/blob/master/packages/shared/reactify/index.ts) (deadly simple!).

```ts
import { reactify } from 'vue-chemisty'

function sum(x: number, y: number) {
  return x + y
}

const reactifiedSum = reactify(sum)
```

## Install

```bash
npm i vue-chemistry
```

## Usage

Functions available in the following namespaces

```js
// see the auto-completion for the full functions list
import { sqrt, pow, sum, sin, round } from 'vue-chemistry/math'
import { toString, toLowerCase } from 'vue-chemistry/string'
import { parseInt, parseFloat } from 'vue-chemistry/number'
import { parse, stringify } from 'vue-chemistry/json'
import { isFalsy } from 'vue-chemistry/boolean'
import { log } from 'vue-chemistry/console'
import { set } from 'vue-chemistry'
// or
import * as Math from 'vue-chemistry/math'
Math.sin(a)
```

Or to have everything in one place:

```js
import { sqrt, parseInt, parse, log } from 'vue-chemistry/all'
```


## Examples

```js
import { set } from 'vue-chemistry'
import { log } from 'vue-chemistry/console'
import { sqrt, pow, sum } from 'vue-chemistry/math'

// Math       _________
//       c = √ a² + b²
const a = ref(3)
const b = ref(4)
const c = sqrt(sum(pow(a, 2), pow(b, 2)))
log(c) // 5

set(a, 5) // shorthand for a.value = 5
set(b, 12)
log(c) // 13
```

```ts
import { stringify, parse } from 'vue-chemistry/json'
import { log } from 'vue-chemistry/console'

// JSON
//
const obj = ref({ foo:'bar' })
const str = stringify(obj)
const clone = parse(str)

log(str) // {"foo":"bar"}

obj.value.no = 42
log(str) // {"foo":"bar","no":42}
```

```ts
import { set } from 'vue-chemistry'
import { log } from 'vue-chemistry/console'
import { rs, toUpperCase } from 'vue-chemistry/string'

// String
//         rs - Reactive String
const name = ref('foo')
const message = rs`Hello ${toUpperCase(name)}!`
log(message) // Hello FOO!
set(name, 'Anthony')
log(message) // Hello ANTHONY!
```

```ts
import { set } from 'vue-chemistry'
import { log } from 'vue-chemistry/console'
import { rs } from 'vue-chemistry/string'
import { dec, multiply } from 'vue-chemistry/match'

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

```ts
import { set, is, ternary, rs, log } from 'vue-chemistry/all'

// String 3
//
const mode = ref('light')

const isDark = is(mode, 'dark')
const icon = rs`mdi-${ternary(isDark, 'moon', 'sun')}`

log(icon) // mdi-sun

set(mode, 'dark')

log(icon) // mdi-moon
```

## Sponsors

This project is part of my <a href='https://github.com/antfu-sponsors'>Sponsor Program</a>

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## License

MIT
