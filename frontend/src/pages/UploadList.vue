<template>
  <div class="upload-list">
    <h1>Liste Yükle</h1>
    <p class="subtitle">Alışveriş listenizi yükleyin veya aşağıya girin</p>
    
    <form @submit.prevent="handleSubmit" id="upload-form">
      <div class="upload-container">
        <FileUploadCard @file-selected="handleFileSelect" />
        <ManualEntryCard @list-updated="handleListUpdate" />
      </div>

      <div class="controls">
        <LanguageSelect @language-changed="handleLanguageChange" />
        <button 
          type="submit"
          class="analyze-btn" 
          :disabled="!canAnalyze || isAnalyzing"
        >
          <span v-if="!isAnalyzing">Analiz Et</span>
          <span v-else>Analiz Ediliyor...</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification';
import { useAsyncState } from '@vueuse/core';
import useVuelidate from '@vuelidate/core';
import { helpers } from '@vuelidate/validators';
import FileUploadCard from '@/components/upload/FileUploadCard.vue';
import ManualEntryCard from '@/components/upload/ManualEntryCard.vue';
import LanguageSelect from '@/components/common/LanguageSelect.vue';

const router = useRouter();
const store = useStore();
const toast = useToast();

const formData = reactive({
  file: null,
  manualList: [],
  language: 'tr'
});

// Validation rules
const rules = {
  file: {
    required: helpers.withMessage(
      'Please upload a file or enter items manually',
      helpers.withParams({}, (value) => value || formData.manualList.length > 0)
    )
  },
  manualList: {
    required: helpers.withMessage(
      'Please upload a file or enter items manually',
      helpers.withParams({}, (value) => value.length > 0 || formData.file)
    )
  }
};

// Initialize Vuelidate
const v$ = useVuelidate(rules, formData);

const canAnalyze = computed(() => {
  return formData.file || formData.manualList.length > 0;
});

const handleFileSelect = (file) => {
  formData.file = file;
  formData.manualList = []; // Clear manual list when file is selected
};

const handleListUpdate = (list) => {
  formData.manualList = list;
  formData.file = null; // Clear file when manual list is updated
};

const handleLanguageChange = (lang) => {
  formData.language = lang;
};

// Submit form action
const { isLoading: isAnalyzing, execute: handleSubmit } = useAsyncState(
  async () => {
    const result = await v$.value.$validate();
    
    if (!result) {
      toast.error('Lütfen bir dosya yükleyin veya listeyi manuel olarak girin');
      return;
    }

    try {
      await store.dispatch('ai/analyzeProductListAxios', {
        file: formData.file,
        items: formData.manualList,
        language: formData.language
      });
      
      router.push('/analiz-sonucu');
      toast.success('Liste başarıyla analiz edildi');
    } catch (error) {
      toast.error(`Analiz başarısız: ${error.message}`);
      console.error('Analysis failed:', error);
    }
  },
  null,
  { immediate: false }
);
</script>