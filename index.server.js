import { h, createSSRApp } from 'vue';

import App from './App';
import { createSSRRouter } from './router';

export default () => {
  const router = createSSRRouter();
  const app = createSSRApp({ render: () => h(App) });

  app.use(router);

  return { app, router };
}
