<template>
  <div class="node-container" :style="{ 
    width: containerDimensions.width + 'px', 
    height: containerDimensions.height + 'px',
    minHeight: '100%'
  }">
    <svg class="connections-container">
      <path
        v-for="connection in allConnections"
        :key="connection.id"
        :d="calculatePath(connection.sourceNode, connection)"
        class="connection-path"
      />
      
      <template v-for="node in nodes" :key="`topic-${node.id}`">
        <path
          v-for="(topic, index) in node.topics"
          :key="`topic-line-${index}`"
          :d="calculateTopicPath(node, index)"
          class="topic-connection-path"
        />
      </template>
    </svg>
    
    <div 
      v-for="node in nodes" 
      :key="node.id" 
      class="node"
      :style="{ left: node.x + 'px', top: node.y + 'px' }"
      @mousedown="startDragging(node, $event)"
    >
      <div class="node-content">
        <div class="node-icon">
          <slot name="icon" :node="node">
            <div class="default-icon"></div>
          </slot>
        </div>
      </div>
      <div class="node-title">{{ node.title }}</div>
      
      <div class="topics-container">
        <div 
          v-for="(topic, index) in node.topics" 
          :key="index"
          class="topic-box"
          :style="{
            left: `${calculateTopicPosition(index, node.topics.length)}px`,
            animationDelay: `${index * 0.1}s`
          }"
        >
          {{ topic }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onUnmounted, computed, onMounted } from 'vue';

const props = defineProps({
  nodes: {
    type: Array,
    required: true,
    default: () => []
  }
});

const draggingNode = ref(null);
const offset = ref({ x: 0, y: 0 });

const allConnections = computed(() => {
  return props.nodes.reduce((acc, node) => {
    const nodeConnections = node.connections.map(connection => ({
      ...connection,
      sourceNode: node
    }));
    return [...acc, ...nodeConnections];
  }, []);
});

const nodeSpacing = computed(() => {
  const baseSpacing = 100;
  const topicCount = Math.max(...props.nodes.map(node => node.topics.length));
  return baseSpacing + (topicCount * 50);
});

const containerDimensions = computed(() => {
  const maxTopics = Math.max(...props.nodes.map(node => node.topics.length));
  const topicHeight = 50;
  const topicSpacing = 90;
  const nodeHeight = 80;
  const minHeight = 800;
  
  const requiredHeight = nodeHeight + topicSpacing + (maxTopics * topicHeight) + 100; // Extra padding
  
  return {
    width: 1200,
    height: Math.max(minHeight, requiredHeight)
  };
});

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
  
  draggingNode.value.x = event.clientX - offset.value.x;
  draggingNode.value.y = event.clientY - offset.value.y;
};

const stopDragging = () => {
  draggingNode.value = null;
  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('mouseup', stopDragging);
};

const calculatePath = (node, connection) => {
  const targetNode = props.nodes.find(n => n.id === connection.targetId);
  if (!targetNode) return '';

  const startX = node.x + 40;
  const startY = node.y + 40;
  const endX = targetNode.x + 40;
  const endY = targetNode.y + 40;
  
  const controlPointX = (startX + endX) / 2;
  const controlPointY = (startY + endY) / 4;
  
  return `M ${startX} ${startY} Q ${controlPointX} ${controlPointY} ${endX} ${endY}`;
};

const calculateTopicPosition = (index, totalTopics) => {
  const boxWidth = 160;
  const gap = 20;
  const totalWidth = (boxWidth + gap) * totalTopics;
  const startX = -totalWidth / 4;
  
  return startX + (boxWidth + gap) * index;
};

const calculateTopicPath = (node, index) => {
  const nodeX = node.x + 40;
  const nodeY = node.y + 80;
  
  const topicX = nodeX + calculateTopicPosition(index, node.topics.length);
  const topicY = nodeY + 90;
  
  const controlPointY = nodeY + 20;
  const controlPointX = (nodeX + topicX) / 2;
  
  return `M ${nodeX} ${nodeY} Q ${controlPointX} ${controlPointY}, ${topicX} ${topicY}`;
};

const calculateInitialPositions = () => {
  const { width: containerWidth, height: containerHeight } = containerDimensions.value;
  const nodeCount = props.nodes.length;
  
  props.nodes.forEach((node, index) => {
    const angle = (2 * Math.PI * index) / nodeCount;
    const radius = Math.max(nodeSpacing.value, Math.min(containerWidth, containerHeight) / 4);
    
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 4;
    
    node.x = centerX + radius * Math.cos(angle);
    node.y = centerY + radius * Math.sin(angle);
  });
};

onMounted(() => {
  calculateInitialPositions();
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('mouseup', stopDragging);
});
</script>

<style lang="scss" scoped>
.node-container {
  position: relative;
  overflow: visible;
  margin: 0 auto;
}

.node {
  .topics-container {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    margin-top: 60px;
    display: flex;
    justify-content: center;
    z-index: 1;
  }

  .topic-box {
    position: absolute;
    transform: translateX(-50%);
    background: #333;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 12px;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    min-width: 160px;
    max-width: 160px;
    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    height: auto;
    z-index: 2;
    animation: fadeInUp 0.3s ease forwards;
  }
}

.topic-connection-path {
  fill: none;
  stroke: #666;
  stroke-width: 1px;
  stroke-dasharray: 4;
  animation: flow 1s linear infinite;
  opacity: 0.6;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate(-50%, 10px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes flow {
  from {
    stroke-dashoffset: 8;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@media (max-width: 768px) {
  .topics-container {
    margin-top: 30px;
  }
  
  .topic-box {
    transform: translate(-50%, 0) scale(0.9);
  }
}

@media (max-width: 480px) {
  .topics-container {
    margin-top: 25px;
  }
  
  .topic-box {
    transform: translate(-50%, 0) scale(0.8);
  }
}
</style>