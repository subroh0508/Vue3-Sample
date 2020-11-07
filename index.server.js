import { h, createSSRApp } from 'vue';

import App from './App';

export default () => {
  const app = createSSRApp({ render: () => h(App) });
  return app;
}
