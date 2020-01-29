<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { createComponent } from '@vue/composition-api';
export default createComponent({});
</script>

<style lang="scss">
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  box-sizing: border-box;
  background-color: #fff;
  margin: 0;
  padding: 0;
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-text {
  text-align: center;
}

.full-screen {
  width: 100vw;
  height: 100vh;
}
</style>
