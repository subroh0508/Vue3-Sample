<script>
export default {
  data: () => ({ msg: 'About' }),
}
</script>
<template>
  <div class='msg'>{{ msg }}</div>
</template>
<style scoped lang='scss'>
.msg {
  color: yellow;
}
</style>