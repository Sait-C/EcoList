<template>
  <div class="board" @click="handleBoardClick">
    <div class="board-header">
      <button v-if="currentNode" @click="goBack" class="back-button">
        ← Back
      </button>
      <h2>{{ currentNode ? currentNode.title : 'Main Board' }}</h2>
    </div>
    
    <div class="board-content" ref="boardRef">
      <Node
        v-for="node in currentNodes"
        :key="node.id"
        :node="node"
        :position="node.position"
        @node-double-click="enterNode"
        @node-move="handleNodeMove"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardComponent',
  components: {
    Node: () => import('./Node.vue')
  },
  data() {
    return {
      nodes: [
        {
          id: 1,
          title: 'Project A',
          position: { x: 100, y: 100 },
          children: [
            {
              id: 3,
              title: 'Task 1',
              position: { x: 150, y: 150 },
              children: []
            },
            {
              id: 4,
              title: 'Task 2',
              position: { x: 300, y: 150 },
              children: []
            }
          ]
        },
        {
          id: 2,
          title: 'Project B',
          position: { x: 400, y: 100 },
          children: []
        }
      ],
      navigationStack: [],
      currentNode: null
    }
  },
  computed: {
    currentNodes() {
      return this.currentNode ? this.currentNode.children : this.nodes
    }
  },
  methods: {
    enterNode(node) {
      this.navigationStack.push(this.currentNode)
      this.currentNode = node
    },
    goBack() {
      if (this.navigationStack.length > 0) {
        this.currentNode = this.navigationStack.pop()
      }
    },
    handleNodeMove(nodeId, newPosition) {
      const updateNodePosition = (nodes) => {
        for (const node of nodes) {
          if (node.id === nodeId) {
            node.position = newPosition
            return true
          }
          if (node.children && updateNodePosition(node.children)) {
            return true
          }
        }
        return false
      }
      updateNodePosition(this.nodes)
    },
    handleBoardClick(event) {
      if (event.target === this.$refs.boardRef) {
        // Handle click on empty board space
      }
    }
  }
}
</script>

<style scoped>
.board {
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  position: relative;
  overflow: hidden;
}

.board-header {
  padding: 1rem;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.back-button {
  padding: 0.5rem 1rem;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.back-button:hover {
  background: #357abd;
}

.board-content {
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
}
</style> 