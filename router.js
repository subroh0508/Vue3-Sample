import { defineAsyncComponent } from 'vue';
import { createRouter as createVueRouter, createWebHistory, createMemoryHistory } from 'vue-router';

const createRouter = (history) => createVueRouter({
  history,
  routes: [
    { path: '/', name: 'home', component: defineAsyncComponent(() => import('./components/HelloWorld')) },
    { path: '/articles', name: 'articles', component: defineAsyncComponent(() => import('./components/Articles')) },
    { path: '/about', name: 'about', component: defineAsyncComponent(() => import('./components/About')) },
  ],
});

export const createClientRouter = () => createRouter(createWebHistory());
export const createSSRRouter = () => createRouter(createMemoryHistory());
