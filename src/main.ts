
import { registerPlugins } from '@/plugins'
import router from '@/router';
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
import { createApp } from 'vue'
const app = createApp(App)
registerPlugins(app)
app.mount('#app')
app.use(router);
app.use(pinia)