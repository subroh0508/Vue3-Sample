<script>
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HelloWorld from './components/HelloWorld';

export default {
  components: {
    SiteHeader,
    SiteFooter,
    HelloWorld,
  },
}
</script>
<template>
  <site-header/>
  <hello-world/>
  <site-footer/>
</template>
