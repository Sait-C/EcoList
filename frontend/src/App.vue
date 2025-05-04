<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
</script>

<style lang="scss">
@import '@/assets/styles/styles.scss';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: #FAFAFA !important;
  scrollbar-width: none;
}
</style>
