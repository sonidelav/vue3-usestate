import { isRef, toRef, Plugin, reactive } from 'vue'
import type { Ref } from 'vue'

const globalState = reactive<any>({
  counter: 0
})

export const useState = <T>(key: string, init?: (() => T | Ref<T> | T)): Ref<T> => {
  const state = toRef(globalState, key)
  if (state.value === undefined && init) {
    let initialValue;
    if (typeof init === 'function') {
      initialValue = init()
    } else {
      initialValue = init
    }
    if (isRef(initialValue)) {
      // vue will unwrap the ref for us
      globalState[key] = initialValue
      return initialValue as Ref<T>
    }
    state.value = initialValue
  }
  return state
}

const VueUseState: Plugin = (app, options) => {
  app.config.globalProperties.$state = globalState
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $state: typeof globalState
  }
}

export default VueUseState