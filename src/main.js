import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import VueScreen from 'vue-screen'

const app = createApp(App);

app.use(Vue3Lottie)
app.use(VueScreen, 'bootstrap')

app.mount('#app')
