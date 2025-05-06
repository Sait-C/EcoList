<template>
  <div class="content-node">
    <div class="content-node-header">
      <h3 class="content-node-title">{{ title }}</h3>
      <div class="content-node-count">{{ cardCount }} card</div>
    </div>
    <div class="content-node-body">
      {{ content }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  cardCount: {
    type: Number,
    default: 0
  }
});
</script>

<style lang="scss" scoped>
.content-node {
  background: #2A2A2A;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  min-width: 250px;
  color: white;
  font-family: system-ui, -apple-system, sans-serif;
  
  .content-node-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .content-node-title {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
  }

  .content-node-count {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .content-node-body {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.4;
  }
}
</style> 