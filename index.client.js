import { h, createApp } from 'vue';

import App from './App';
import { createClientRouter } from './router';

const router = createClientRouter();
const app = createApp({ render: () => h(App) });

app.use(router)

router.isReady().then(() => { app.mount('#app'); });

