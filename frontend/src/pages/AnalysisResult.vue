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
        <h1>{{ currentNode?.title ? currentNode?.title : 'Analiz Sonuçları' }}</h1>
        <div class="node-map">
          <BoardComponent :initial-boards="boards" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import BoardComponent from '@/components/board/BoardComponent.vue';
import AnalysisListItem from '@/components/analysis/AnalysisListItem.vue';

const store = useStore();
const selectedItemId = ref(null);

const handleSelect = (id) => {
  selectedItemId.value = id === selectedItemId.value ? null : id;
};

const currentNode = computed(() => {
  return store.getters['board/currentBoard'];
});


// Sample board data with parent-child relationships
const boards = [
  // Root level boards
  {
    id: 1,
    title: 'Cam Şişe',
    topics: ['Çevresel Zararlar', 'Geri Dönüşümü', 'Üretim Maliyeti'],
    x: 200,
    y: 150,
    parentId: null
  },
  {
    id: 2,
    title: 'Plastik Şişe',
    topics: ['Çevresel Zararlar', 'Geri Dönüşümü', 'Üretim Maliyeti'],
    x: 400,
    y: 150,
    parentId: null
  },
  {
    id: 3,
    title: 'Kağıt Poşet',
    topics: ['Sürdürülebilirlik', 'Geri Dönüşüm', 'Maliyet'],
    x: 600,
    y: 150,
    parentId: null
  },
  
  // Child boards for Cam Şişe (id: 1)
  {
    id: 101,
    title: 'Üretim',
    topics: ['Enerji Tüketimi', 'Hammadde'],
    x: 150,
    y: 200,
    parentId: 1
  },
  {
    id: 102,
    title: 'Geri Dönüşüm',
    topics: ['Süreç', 'Verimlilik'],
    x: 350,
    y: 200,
    parentId: 1
  },
  {
    id: 103,
    title: 'Çevresel Etki',
    topics: ['CO2 Emisyonu', 'Atık Yönetimi'],
    x: 550,
    y: 200,
    parentId: 1
  },
  
  // Child boards for Plastik Şişe (id: 2)
  {
    id: 201,
    title: 'Üretim',
    topics: ['Petrol Tüketimi', 'Enerji'],
    x: 150,
    y: 200,
    parentId: 2
  },
  {
    id: 202,
    title: 'Geri Dönüşüm',
    topics: ['Zorluklar', 'Oranlar'],
    x: 350,
    y: 200,
    parentId: 2
  },
  {
    id: 203,
    title: 'Çevresel Etki',
    topics: ['Okyanus Kirliliği', 'Mikroplastikler'],
    x: 550,
    y: 200,
    parentId: 2
  },
  
  // Child boards for Kağıt Poşet (id: 3)
  {
    id: 301,
    title: 'Üretim',
    content: 'Kağıt poşet üretiminde kullanılan hammadde ve enerji tüketimi analizi',
    cardCount: 2,
    x: 150,
    y: 200,
    parentId: 3
  },
  {
    id: 302,
    title: 'Geri Dönüşüm',
    content: 'Kağıt poşetlerin geri dönüşüm süreçleri ve verimliliği',
    cardCount: 1,
    x: 350,
    y: 200,
    parentId: 3
  },
  {
    id: 303,
    title: 'Çevresel Etki',
    content: 'Kağıt poşetlerin çevresel etki değerlendirmesi ve karbon ayak izi',
    cardCount: 3,
    x: 550,
    y: 200,
    parentId: 3
  },
  
  // Grandchild boards for Cam Şişe > Üretim (id: 101)
  {
    id: 1011,
    title: 'Enerji Kaynakları',
    topics: ['Yenilenebilir', 'Fosil'],
    content: 'Kağıt poşetlerin geri dönüşüm süreçleri ve verimliliği',
    x: 200,
    y: 150,
    parentId: 101
  },
  {
    id: 1012,
    title: 'Hammadde Kaynakları',
    content: 'Kağıt poşetlerin geri dönüşüm süreçleri ve verimliliği',
    topics: ['Kum', 'Soda'],
    x: 400,
    y: 150,
    parentId: 101
  }
];

onMounted(() => {
  // Initialize the store with board data
  store.commit('board/SET_BOARDS', boards);
});

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