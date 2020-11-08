<script>
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

export default {
  components: {
    SiteHeader,
    SiteFooter,
  },
}
</script>
<template>
  <div id="app">
    <div>
      <site-header/>
      <router-view/>
      <site-footer/>
    </div>
  </div>
</template>
