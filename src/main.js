import { createApp } from 'vue'
import './style.css'
import store from './store'
import App from './App.vue'
import './axios'
import './indexeddb'
import router from 'host_app/router'

createApp(App).use(router).use(store).mount('#app')
