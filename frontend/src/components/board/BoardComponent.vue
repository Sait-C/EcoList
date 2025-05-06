<template>
  <div class="board-container">
    <div v-if="currentBoardId" class="board-navigation">
      <button class="back-button" @click="navigateBack">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        Geri
      </button>
    </div>
    
    <div class="board-content">
      <div 
        v-for="node in currentNodes" 
        :key="node.id" 
        class="board-node"
        :style="{ left: node.x + 'px', top: node.y + 'px' }"
        @mousedown="startDragging(node, $event)"
        @dblclick="navigateToNode(node)"
      >
        <ContentNode 
          v-if="node.content"
          :title="node.title"
          :content="node.content"
          :card-count="node.cardCount || 0"
        />
        <template v-else>
          <div class="node-content">
            <div class="node-icon">
              <slot name="icon" :node="node">
                <div class="default-icon"></div>
              </slot>
            </div>
          </div>
          <div class="node-title">{{ node.title }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, defineProps } from 'vue';
import { useStore } from 'vuex';
import ContentNode from '@/components/node/ContentNode.vue';

const props = defineProps({
  initialBoards: {
    type: Array,
    default: () => []
  }
});

const store = useStore();
const draggingNode = ref(null);
const offset = ref({ x: 0, y: 0 });

// Initialize boards if provided
onMounted(() => {
  if (props.initialBoards && props.initialBoards.length > 0) {
    store.commit('board/SET_BOARDS', props.initialBoards);
  }
});

const currentBoardId = computed(() => store.state.board.currentBoardId);
const currentNodes = computed(() => store.getters['board/currentNodes']);

const navigateToNode = (node) => {
  store.dispatch('board/navigateToBoard', node.id);
};

const navigateBack = () => {
  store.dispatch('board/navigateBack');
};

const startDragging = (node, event) => {
  draggingNode.value = node;
  offset.value = {
    x: event.clientX - node.x,
    y: event.clientY - node.y
  };
  document.addEventListener('mousemove', handleDrag);
  document.addEventListener('mouseup', stopDragging);
};

const handleDrag = (event) => {
  if (!draggingNode.value) return;
  
  const newX = event.clientX - offset.value.x;
  const newY = event.clientY - offset.value.y;
  
  store.dispatch('board/updateNodePosition', {
    nodeId: draggingNode.value.id,
    x: newX,
    y: newY
  });
};

const stopDragging = () => {
  draggingNode.value = null;
  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('mouseup', stopDragging);
};

onUnmounted(() => {
  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('mouseup', stopDragging);
});
</script>