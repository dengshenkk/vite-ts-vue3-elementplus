import { createApp } from 'vue'
import App from './App.vue'
import 'reset.css'
import 'element-plus/dist/index.css'
import { router } from '@/router'

const app = createApp(App)
app.use(router)
app.mount('#app')
