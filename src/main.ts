import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'


import '@/styles/index.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";

import en from '@/locales/en.json'
import th from '@/locales/th.json'

let i18n = createI18n({
    locale: localStorage.getItem('lang')?.toString() || 'en',
    globalInjection: true,
    messages: {
        en: en,
        th: th
    }
})

createApp(App).use(i18n).use(store).use(router).mount('#app')

