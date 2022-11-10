import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Elementplus from 'element-plus';
import 'element-plus/dist/index.css';

import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(Elementplus);

app.mount('#app');
