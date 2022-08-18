import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/main.scss'
import './assets/all.min.css'
import './assets/all.min.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
