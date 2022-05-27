# Vue3 `useState` Composable

Clone of Nuxt3's `useState` composable

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

// App.vue
...
computed: {
    state() { return this.$state }
}
...
```
