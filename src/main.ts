import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/index.css'
import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import th from '@/locales/th.json'

let i18n = createI18n({
    locale: 'th',
    messages: {
        en: en,
        th: th
    }
})

createApp(App).use(i18n).use(store).use(router).mount('#app')

router.beforeEach((to,from,next)=>{
    let language = to.params.lang
    if(!language){
        language = 'en'
    }
    //i18n.locale = language
    next()
})
