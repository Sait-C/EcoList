export default {
  namespaced: true,
  
  state: {
    boards: [],
    currentBoardId: null,
    navigationStack: [],
    selectedProduct: null
  },
  
  mutations: {
    SET_BOARDS(state, boards) {
      state.boards = boards;
    },
    SET_CURRENT_BOARD(state, boardId) {
      state.currentBoardId = boardId;
    },
    PUSH_TO_NAVIGATION(state, boardId) {
      state.navigationStack.push(boardId);
    },
    POP_FROM_NAVIGATION(state) {
      state.navigationStack.pop();
    },
    UPDATE_NODE_POSITION(state, { nodeId, x, y }) {
      const node = state.boards.find(board => board.id === nodeId);
      if (node) {
        node.x = x;
        node.y = y;
      }
    },
    ADD_BOARD(state, board) {
      state.boards.push(board);
    },
    REMOVE_BOARD(state, boardId) {
      state.boards = state.boards.filter(board => board.id !== boardId);
    },
    SET_NODE_LOADING(state, { nodeId, loading }) {
      const node = state.boards.find(board => board.id === nodeId);
      if (node) {
        node.loading = loading;
      }
    },
    UPDATE_NODE_CONTENT(state, { nodeId, content }) {
      const node = state.boards.find(board => board.id === nodeId);
      if (node) {
        node.content = content;
      }
    }
  },
  
  actions: {
    navigateToBoard({ commit, state }, boardId) {
      if (state.currentBoardId) {
        commit('PUSH_TO_NAVIGATION', state.currentBoardId);
      }
      commit('SET_CURRENT_BOARD', boardId);
    },
    
    navigateBack({ commit, state }) {
      if (state.navigationStack.length > 0) {
        const previousBoardId = state.navigationStack[state.navigationStack.length - 1];
        commit('SET_CURRENT_BOARD', previousBoardId);
        commit('POP_FROM_NAVIGATION');
      } else {
        commit('SET_CURRENT_BOARD', null);
      }
    },
    
    updateNodePosition({ commit }, { nodeId, x, y }) {
      commit('UPDATE_NODE_POSITION', { nodeId, x, y });
    },
    
    addBoard({ commit }, board) {
      commit('ADD_BOARD', board);
    },
    
    removeBoard({ commit }, boardId) {
      commit('REMOVE_BOARD', boardId);
    }
  },
  
  getters: {
    currentBoard: (state) => {
      if (!state.currentBoardId) return null;
      return state.boards.find(board => board.id === state.currentBoardId);
    },
    
    currentNodes: (state) => {
      if (!state.currentBoardId) {
        // Show root level nodes
        return state.boards.filter(board => !board.parentId);
      }
      // Show child nodes of the current board
      return state.boards.filter(board => board.parentId === state.currentBoardId);
    }
  }
}; 