import {
    analyzeProductListAxios,
    createInformationTreeAxios,
} from "@/services/ai/ai.service";

import asyncHandler from "@/utils/async";

function handleError(error) {
    error.message = error.response?.data?.error || 'An error occurred';
    throw error;
}

export default {
    namespaced: true,
    state: {
        productsList: [],
        informationTree: [],
        analysisStatus: null,
    },
    mutations: {
        SET_PRODUCTS_LIST(state, productsList) {
            state.productsList = productsList;
        },
        SET_INFORMATION_TREE(state, informationTree) {
            state.informationTree = informationTree;
        },
        SET_ANALYSIS_STATUS(state, status) {
            state.analysisStatus = status;
        },
    },
    actions: {
        analyzeProductListAxios: asyncHandler(async function ({ commit }, payload) {
            commit('SET_ANALYSIS_STATUS', 'analyzing');
            
            try {
                const response = await analyzeProductListAxios(payload);
                if(response && response.data) {
                    commit("SET_PRODUCTS_LIST", response.data);
                    commit('SET_ANALYSIS_STATUS', 'completed');
                }
                return response.data;
            } catch (error) {
                commit('SET_ANALYSIS_STATUS', 'error');
                throw error;
            }
        }, handleError),
        createInformationTreeAxios: asyncHandler(async function ({ commit }, payload) {
            const response = await createInformationTreeAxios(payload);
            if(response && response.data) {
                commit("SET_INFORMATION_TREE", response.data);
            }
        }, handleError),
    },
    getters: {
        getProductList: (state) => state.productsList,
        getInformationTree: (state) => state.informationTree,
        getAnalysisStatus: (state) => state.analysisStatus,
    },
}