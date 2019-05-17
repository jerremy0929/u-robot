<template lang="pug">
  .home
    div
      img.robot(
        src='../assets/img/robot-home.png'
        alt="robot-home")
    .get-started
      a(href) Get started
      | building your first robot!
</template>


<script>
export default {
  name: 'HomePage',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.home {
  text-align: center;
}

.robot {
  height: 300px;
}
</style>
