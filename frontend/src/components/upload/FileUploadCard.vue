<template>
  <div class="file-upload-card">
    <div class="icon-container">
      <div class="file-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
          <path d="M12 18v-6"/>
          <path d="M9 15h6"/>
        </svg>
      </div>
    </div>
    <input 
      type="file" 
      ref="fileInput" 
      @change="handleFileChange" 
      class="hidden-input"
      accept="image/*,.txt,.doc,.docx"
    >
    <button class="upload-btn" @click="triggerFileInput">
      Dosya Seç
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['file-selected']);
const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    emit('file-selected', file);
  }
};
</script>