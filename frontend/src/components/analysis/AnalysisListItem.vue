<template>
  <div 
    class="analysis-list-item" 
    :class="{ 
      success: status === 'success', 
      error: status === 'error',
      'success-selected': status === 'success' && selected,
      'error-selected': status === 'error' && selected
    }"
    @click="$emit('select', id)"
  >
    <div class="indicator">
      <svg v-if="status === 'success'" viewBox="0 0 24 24" class="icon">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
      <svg v-else viewBox="0 0 24 24" class="icon">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
      </svg>
    </div>
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'error'].includes(value)
  },
  selected: {
    type: Boolean,
    default: false
  }
});

defineEmits(['select']);
</script>

<style lang="scss" scoped>
.analysis-list-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #eee;
  position: relative;
  background-color: white;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .indicator {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    margin-right: 1rem;
    margin-top: 0.25rem;

    .icon {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  }

  &.success {
    .indicator {
      color: #4CAF50;
    }
  }

  &.error {
    .indicator {
      color: #F44336;
    }
  }

  &.success-selected {
    background-color: rgba(76, 175, 80, 0.1);
    border-color: #4CAF50;
  }

  &.error-selected {
    background-color: rgba(244, 67, 54, 0.1);
    border-color: #F44336;
  }

  .content {
    width: 100%;

    h3 {
      margin: 0;
      font-size: 1rem;
      color: #333;
      margin-bottom: 0.25rem;
      text-align: center;
    }

    p {
      margin: 0;
      font-size: 0.875rem;
      color: #666;
      line-height: 1.4;
      text-align: left;
    }
  }
}
</style> 