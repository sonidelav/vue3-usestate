# Vue3 Instance Events Plugin

Adds `.on` and `.emit` into instance API

## Usage

```js
import { VueInstanceEvents } from 'vue3-instance-events'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App).use(VueInstanceEvents)
const instance = app.mount('#app')

instance.on('showed', () => {
    ...
})

// Event names in camelCase
instance.emit('showComponent')
```

## Vue Documentation

[Breaking Changes v2 to v3 Migrations](https://v3-migration.vuejs.org/breaking-changes/events-api.html#_3-x-update)

> We removed $on, $off and $once methods from the instance completely. $emit is still a part of the existing API as it's used to trigger event handlers declaratively attached by a parent component.
