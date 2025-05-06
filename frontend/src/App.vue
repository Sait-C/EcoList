<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { provide, ref } from 'vue';

export default {
  setup() {
    const navigationStack = ref([]);
    const currentBoardId = ref(null);
    
    const navigateToBoard = (boardId) => {
      if (currentBoardId.value) {
        navigationStack.value.push(currentBoardId.value);
      }
      currentBoardId.value = boardId;
    };
    
    const navigateBack = () => {
      if (navigationStack.value.length > 0) {
        currentBoardId.value = navigationStack.value.pop();
      } else {
        currentBoardId.value = null;
      }
    };
    
    provide('boardNavigation', {
      currentBoardId,
      navigationStack,
      navigateToBoard,
      navigateBack
    });
  }
}
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
