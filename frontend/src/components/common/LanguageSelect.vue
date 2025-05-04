<template>
  <div class="language-select">
    <label>Dil seçin:</label>
    <select v-model="selectedLang" @change="$emit('language-changed', selectedLang)">
      <option value="tr">Türkçe</option>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedLang = ref('tr');
</script>