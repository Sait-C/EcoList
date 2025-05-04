<template>
  <div class="manual-entry-card">
    <h3>Listeyi manuel gir</h3>
    <textarea
      v-model="listText"
      placeholder="Her satıra bir ürün yazın..."
      @input="emitList"
    ></textarea>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['list-updated']);
const listText = ref('');

const emitList = () => {
  const items = listText.value
    .split('\n')
    .map(item => item.trim())
    .filter(item => item.length > 0);
  emit('list-updated', items);
};
</script>