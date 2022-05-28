import { isRef, toRef, Plugin, reactive } from 'vue'
import type { Ref } from 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $state: typeof globalState
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $state: typeof globalState
  }
}

type IntializeFunc<T> = (() => T | Ref<T>)
type InitializeValue<T> = T | Ref<T> | IntializeFunc<T>
type GlobalState = Record<string, any>

const globalState = reactive<GlobalState>({})

export const useState = <T>(key: string, init?: InitializeValue<T>): Ref<T> => {
  const state = toRef(globalState, key)
  if (state.value === undefined && init !== undefined) {
    let initialValue;

    if (init instanceof Function) {
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

export default VueUseState