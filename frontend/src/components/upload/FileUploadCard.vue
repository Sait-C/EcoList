<template>
  <div class="file-upload-card">
    <div class="icon-container" v-if="!previewUrl">
      <div class="file-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
          <path d="M12 18v-6"/>
          <path d="M9 15h6"/>
        </svg>
      </div>
    </div>
    <div v-else class="preview-container">
      <img :src="previewUrl" alt="File preview" class="file-preview" />
      <button class="remove-btn" @click.prevent="removeFile">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </div>
    <input 
      type="file" 
      ref="fileInput" 
      @change="handleFileChange" 
      class="hidden-input"
      accept="image/*,.txt,.doc,.docx"
    >
    <button class="upload-btn" @click.prevent="triggerFileInput">
      {{ previewUrl ? 'Dosyayı Değiştir' : 'Dosya Seç' }}
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['file-selected']);
const fileInput = ref(null);
const previewUrl = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Create preview URL for image files
    if (file.type.startsWith('image/')) {
      previewUrl.value = URL.createObjectURL(file);
    } else {
      previewUrl.value = null;
    }
    emit('file-selected', file);
  }
};

const removeFile = () => {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value);
  }
  previewUrl.value = null;
  fileInput.value.value = '';
  emit('file-selected', null);
};
</script>