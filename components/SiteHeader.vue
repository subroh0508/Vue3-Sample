<script>
import { mergeProps } from 'vue';
import NavMenu from './NavMenu';

export default {
  components: {
    NavMenu,
  },
  data: () => ({
    menuList: [
      { name: 'articles', display: 'Articles' },
      { name: 'about', display: 'About' },
    ],
  }),
  methods: {
    redirectTo(name) {
      this.$router.push({ name });
    },
  },
}
</script>
<template>
  <section class="header">
    <h1 class='site-name' v-on:click="redirectTo('home')">Site Title</h1>
    <nav-menu v-bind="{ menuList, onClick: redirectTo }"/>
  </section>
</template>
