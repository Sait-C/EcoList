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
    
    <svg class="connections-layer">
      <g v-if="shouldShowConnections">
        <path
          v-for="connection in nodeConnections"
          :key="connection.id"
          :d="calculateConnectionPath(connection.source, connection.target)"
          class="connection-line"
        />
      </g>
    </svg>
    
    <div class="board-content">
      <div 
        v-for="node in currentNodes" 
        :key="node.id" 
        class="board-node"
        :class="{ 'info-node': node.isInfoNode }"
        :style="{ left: node.x + 'px', top: node.y + 'px' }"
        @mousedown="!node.isInfoNode && startDragging(node, $event)"
        @dblclick="!node.isInfoNode && navigateToNode(node)"
      >
        <ContentNode 
          v-if="node.content"
          :title="node.title"
          :content="node.content"
          :card-count="node.sustainabilityScore || 0"
        />
        <template v-else>
          <div class="node-content" :class="{ 'loading': node.loading }">
            <div v-if="node.loading" class="loading-indicator">
              <div class="spinner"></div>
            </div>
            <img :src="node.image" v-else-if="node.image" alt="Product Image" class="product-image">
            <div v-else class="node-icon">
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
import { ref, computed, onUnmounted, defineProps, watch } from 'vue';
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

watch(() => props.initialBoards, (newBoards) => {
  if (newBoards && newBoards.length > 0) {
    store.commit('board/SET_BOARDS', newBoards);
  }
}, { immediate: true });

const currentBoardId = computed(() => store.state.board.currentBoardId);
const currentNodes = computed(() => store.getters['board/currentNodes']);

const shouldShowConnections = computed(() => {
  // Only show connections when viewing an information tree
  const currentNode = store.getters['board/currentBoard'];
  return currentNode && currentNodes.value.some(node => node.isInfoNode);
});

const nodeConnections = computed(() => {
  if (!shouldShowConnections.value) return [];
  
  const connections = [];
  const nodes = currentNodes.value;
  
  nodes.forEach((node) => {
    if (node.parentIdInTree) {
      const parentNode = nodes.find(n => n.id === node.parentIdInTree);
      if (parentNode) {
        connections.push({
          id: `connection-${node.id}-${parentNode.id}`,
          source: parentNode,
          target: node
        });
      }
    }
  });
  
  return connections;
});

const calculateConnectionPath = (source, target) => {
  // Start from the center of the source node
  const sourceX = source.x + 100;
  const sourceY = source.y + 50;
  
  // End at the center of the target node
  const targetX = target.x + 100;
  const targetY = target.y + 50;
  
  // Create a curved path
  const midY = (sourceY + targetY) / 2;
  
  return `M ${sourceX} ${sourceY} 
          C ${sourceX} ${midY}, 
            ${targetX} ${midY}, 
            ${targetX} ${targetY}`;
};

const navigateToNode = async (node) => {
  // Check if this is a topic node (no content and has a parentId)
  if (!node.content && node.parentId) {
    // Find the parent node to get the product name
    const parentNode = store.state.board.boards.find(board => board.id === node.parentId);
    
    if (parentNode) {
      // Set loading state for this node
      store.commit('board/SET_NODE_LOADING', { nodeId: node.id, loading: true });
      
      try {
        // Call the createInformationTree action with the product name and topic
        await store.dispatch('ai/createInformationTreeAxios', {
          name: parentNode.title,
          topic: node.title,
        });
        
        // Get the information tree data
        const informationTree = store.getters['ai/getInformationTree'];
        
        if (informationTree && informationTree.data) {
          console.log('Information tree data:', informationTree.data);
          
          // Create content for the topic node based on the information tree
          store.commit('board/UPDATE_NODE_CONTENT', {
            nodeId: node.id,
            content: informationTree.data.content || 'No detailed information available'
          });
          
          // Create new nodes from the information tree
          if (informationTree.data) {
            // Generate new nodes from the information tree
            const newNodes = [];
            let idCounter = 1;
            
            const createNodesFromTree = (item, parentId, parentIdInTree = null, x = 550, y = 0, recursionIndex = 0) => {
              const nodeId = idCounter++;
              
              // Create the node
              const newNode = {
                id: nodeId,
                title: item.name,
                content: item.content,
                parentId: parentId,
                parentIdInTree: parentIdInTree,
                x: x,
                y: y,
                isInfoNode: true,
              };
              
              newNodes.push(newNode);
              
              if (item.children && item.children.length > 0) {
                // Calculate base horizontal distance based on recursion level
                const baseDistance = 500 - (recursionIndex * 500); // Decreases by 300px each level
                const totalWidth = baseDistance * (item.children.length - 1);
                
                item.children.forEach((child, index) => {
                  const childX = x + (index * baseDistance) - (totalWidth / 2);
                  const childY = y + 400;
                  
                  createNodesFromTree(child, parentId, nodeId, childX, childY, recursionIndex + 1);
                });
              }
              
              return nodeId;
            };
            
            createNodesFromTree(informationTree.data, node.id);
            
            newNodes.forEach(newNode => {
              store.commit('board/ADD_BOARD', newNode);
            });
          }
        }
      } catch (error) {
        console.error('Error fetching information tree:', error);
      } finally {
        store.commit('board/SET_NODE_LOADING', { nodeId: node.id, loading: false });
      }
    }
  }
  
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

<style lang="scss" scoped>
.board-container {
  position: relative;
}

.connections-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: visible;
}

.connection-line {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
  stroke-dasharray: 4;
  animation: dash 20s linear infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}

.loading-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

.node-content.loading {
  background-color: #7a9cc6;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.board-node.info-node {
  cursor: default;
}

.board-node.info-node .node-content {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
}
</style>