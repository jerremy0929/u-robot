<style lang="scss" scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

header {
  width: 1084px;
  margin: 0 auto;
  background-color: #999;

  ul {
    display: flex;
    padding: 3px;

    .nav-item {
      display: inline-block;
      padding: 5px 10px;
      font-size: 22px;
      border-right: 1px solid #bbb;

      .logo {
        height: 30px;
        vertical-align: middle;
      }
    }
  }
}

main {
  width: 1024px;
  min-height: 300px;
  padding: 30px;
  margin: 0 auto;
  background-color: #fff;
}
</style>

<template lang="pug">
  .app
    header
      nav
        ul
          li.nav-item
            img.logo(
              src="./assets/img/build-a-bot-logo.png"
              alt="build-a-bot-logo")
            | Build-a-Bot
    main
      home-page
</template>

<script>
import HomePage from '@/components/home-page'

export default {
  name: 'App',
  components: {
    HomePage,
  },
}
</script>
