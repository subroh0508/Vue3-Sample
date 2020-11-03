<script>
export default {
  data: () => ({ msg: 'Hello, World' }),
}
</script>
<template>
  <div class='msg'>{{ msg }}</div>
</template>
<style scoped lang='scss'>
.msg {
  color: red;
}
</style>
