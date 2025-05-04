import { createStore } from 'vuex'

export default createStore({
  state: {
    shoppingList: [],
    analysisResult: null,
    alternatives: []
  },
  mutations: {
    setShoppingList(state, list) { state.shoppingList = list },
    setAnalysisResult(state, result) { state.analysisResult = result },
    setAlternatives(state, alternatives) { state.alternatives = alternatives }
  },
  actions: {
    
  }
}) 