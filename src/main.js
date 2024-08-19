
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Use bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import './assets/styles/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
