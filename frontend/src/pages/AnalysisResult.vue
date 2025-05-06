<template>
  <div class="analysis-result">
    <div class="analysis-container">
      <div class="analysis-list">
        <h2>Analiz Detayları</h2>
        <AnalysisListItem
          v-for="(item, index) in productsList"
          :key="index"
          :id="index"
          :title="item.name"
          :description="item.reason"
          :status="item.sustainabilityScore >= 5 ? 'success' : 'error'"
          :selected="selectedItemId === index"
          @select="handleSelect"
        />
      </div>
      
      <div class="analysis-content">
        <h1>{{ currentNode?.title ? currentNode?.title : 'Analiz Sonuçları' }}</h1>
        <div class="node-map">
          <BoardComponent :initial-boards="boards" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';
import BoardComponent from '@/components/board/BoardComponent.vue';
import AnalysisListItem from '@/components/analysis/AnalysisListItem.vue';

const store = useStore();
const selectedItemId = ref(null);
const productsList = computed(() => store.getters['ai/getProductList']);
const boards = ref([]);

const handleSelect = (id) => {
  selectedItemId.value = id === selectedItemId.value ? null : id;
};

const currentNode = computed(() => {
  return store.getters['board/currentBoard'];
});

// Generate boards when a product is selected
watch(selectedItemId, (newId) => {
  if (newId === null) {
    boards.value = [];
    store.commit('board/SET_BOARDS', []);
    return;
  }
  
  const selectedProduct = productsList.value[newId];
  if (!selectedProduct) return;
  
  // Create board nodes from alternatives
  const generatedBoards = [];
  let idCounter = 1;
  
  // Root level boards (alternatives)
  selectedProduct.alternatives.forEach((alternative, index) => {
    const alternativeId = idCounter++;
    
    generatedBoards.push({
      id: alternativeId,
      title: alternative.name,
      sustainabilityScore: alternative.sustainabilityScore,
      reason: alternative.reason,
      image: alternative.imageBase64,
      x: 200 + (index * 300),
      y: 150,
      parentId: null
    });
    
    // Child boards (topics)
    if (alternative.topics && alternative.topics.length > 0) {
      alternative.topics.forEach((topic, topicIndex) => {
        generatedBoards.push({
          id: idCounter++,
          title: topic,
          content: '', // Initialize with empty content
          x: 150 + (topicIndex * 200),
          y: 200,
          parentId: alternativeId,
          loading: false // Add loading state
        });
      });
    }
  });
  
  boards.value = generatedBoards;
  store.commit('board/SET_BOARDS', generatedBoards);
});

onMounted(() => {
  // Initialize the store with empty boards
  store.commit('board/SET_BOARDS', []);
});

</script>

<style lang="scss" scoped>
.analysis-result {
  padding: 2rem;
}

.node-map {
  width: 100%;
  height: auto;
  min-height: 500px;
  position: relative;
  border-radius: 16px;
  margin: 2rem auto;
  overflow: visible;
}

.analysis-container {
  display: flex;
  gap: 2rem;
}

.analysis-list {
  flex: 0 0 300px;
}

.analysis-content {
  flex: 1;
}
</style>