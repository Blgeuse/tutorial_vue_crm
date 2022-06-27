import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import 'materialize-css/dist/js/materialize.min'

createApp(App).use(router).mount('#app')
