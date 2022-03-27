import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import '../public/MainPage.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
