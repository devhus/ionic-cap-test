import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { IonicVue } from '@ionic/vue';

const app = createApp(App)

app.use(createPinia())
app.use(IonicVue)
app.use(router);

router.isReady().then(() => {
  app.mount('#app');
});
