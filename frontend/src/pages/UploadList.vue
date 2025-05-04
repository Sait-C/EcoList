<template>
  <div class="upload-list">
    <h1>Liste Yükle</h1>
    <p class="subtitle">Alışveriş listenizi yükleyin veya aşağıya girin</p>
    
    <div class="upload-container">
      <FileUploadCard @file-selected="handleFileSelect" />
      <ManualEntryCard @list-updated="handleListUpdate" />
    </div>

    <div class="controls">
      <LanguageSelect @language-changed="handleLanguageChange" />
      <button 
        class="analyze-btn" 
        @click="analyze"
        :disabled="!canAnalyze"
      >
        Analiz Et
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import FileUploadCard from '@/components/upload/FileUploadCard.vue';
import ManualEntryCard from '@/components/upload/ManualEntryCard.vue';
import LanguageSelect from '@/components/common/LanguageSelect.vue';

const router = useRouter();

const selectedFile = ref(null);
const manualList = ref([]);
const selectedLanguage = ref('tr');

const canAnalyze = computed(() => {
  return selectedFile.value || manualList.value.length > 0;
});

const handleFileSelect = (file) => {
  selectedFile.value = file;
};

const handleListUpdate = (list) => {
  manualList.value = list;
};

const handleLanguageChange = (lang) => {
  selectedLanguage.value = lang;
};

const analyze = async () => {
  try {
    // TODO: Implement API call to analyze the list
    // For now, just navigate to the analysis page
    router.push('/analiz-sonucu');
  } catch (error) {
    console.error('Analysis failed:', error);
  }
};
</script>