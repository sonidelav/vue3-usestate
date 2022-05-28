# Vue3 `useState` Composable

Clone of Nuxt3's `useState` composable

## Install

### NPM

```sh
npm install vue3-usestate
```

### Yarn

```sh
yarn add vue3-usestate
```

## Usage

```js
import { useState } from 'vue3-usestate'

setup() {
    const counter = useState('counter', 0)
    return { counter }
}
```

## Plugin

Inject state to every instance under `this.$state` global property

```js
// main.js
import VueUseState from 'vue3-usestate'

createApp(App).use(VueUseState).mount('#app')
```

### Global Property

```js
// App.vue
computed: {
    state() { return this.$state }
}
```

or

```vue
<template>
    <div>{{ $state.counter }}</div>
</template>
```
