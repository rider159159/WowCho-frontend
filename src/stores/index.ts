import { App } from 'vue'
import { createPinia } from 'pinia'

export function setupStore(AppInstance:App<Element>) {
  const store = createPinia()
  AppInstance.use(store as any)
}
export * from './userInfoStore'
export * from './searchStore'
export * from './requestStore'
export * from './userLoginStore'
