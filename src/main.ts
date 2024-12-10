import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from './locales/i18n'

import PrimeVue from 'primevue/config'
import primevueConfig from './lib/primevue'

import App from './App.vue'
import router from './router'

import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(PrimeVue, primevueConfig)

app.use(ToastService)
app.component('PrimeAvatar', Avatar)
app.component('PrimeButton', Button)

app.mount('#app')
