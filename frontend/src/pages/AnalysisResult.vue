<template>
  <div class="analysis-result">
    <div class="analysis-container">
      <div class="analysis-list">
        <h2>Analiz Detayları</h2>
        <AnalysisListItem
          v-for="item in analysisItems"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :description="item.description"
          :status="item.status"
          :selected="selectedItemId === item.id"
          @select="handleSelect"
        />
      </div>
      
      <div class="analysis-content">
        <h1>Analiz Sonucu</h1>
        <div class="node-map">
          <NodeComponent :nodes="nodes" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NodeComponent from '@/components/node/NodeComponent.vue';
import AnalysisListItem from '@/components/analysis/AnalysisListItem.vue';

const selectedItemId = ref(null);

const handleSelect = (id) => {
  selectedItemId.value = id === selectedItemId.value ? null : id;
};

const nodes = ref([
  {
    id: 1,
    title: 'Cam Şişe',
    topics: ['Çevresel Zararlar', 'Geri Dönüşümü', 'Üretim Maliyeti'],
    connections: [
      { id: 1, targetId: 2 }
    ]
  },
  {
    id: 2,
    title: 'Plastik Şişe',
    topics: ['Çevresel Zararlar', 'Geri Dönüşümü', 'Üretim Maliyeti'],
    connections: [
      { id: 2, targetId: 3 }
    ]
  },
]);

const analysisItems = ref([
  {
    id: 1,
    title: 'Plastik Şişe',
    description: 'Listenizde bulunan ürünlerin %75\'i geri dönüştürülebilir malzemelerden oluşuyor.',
    status: 'success'
  },
  {
    id: 2,
    title: 'Naylon Poşet',
    description: 'Seçilen ürünlerin karbon ayak izi ortalamanın üzerinde. Alternatif ürünler önerildi.',
    status: 'error'
  },
]);
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
</style>