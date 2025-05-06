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
        language: 'en',
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
        SET_LANGUAGE(state, language) {
            state.language = language;
        },
    },
    actions: {
        analyzeProductListAxios: asyncHandler(async function ({ commit }, payload) {
            commit('SET_ANALYSIS_STATUS', 'analyzing');
            
            const response = await analyzeProductListAxios(payload);
            console.log("Response: ", response);
            if(response && response.data?.data) {
                commit("SET_PRODUCTS_LIST", response.data.data.productsList);
                if(payload.language) {
                    commit('SET_LANGUAGE', payload.language);
                }
                commit('SET_ANALYSIS_STATUS', 'completed');
            } else {
                commit('SET_ANALYSIS_STATUS', 'error');
                throw new Error('No response from server');
            }
        }, handleError),
        createInformationTreeAxios: asyncHandler(async function ({ commit, state }, payload) {
            const response = await createInformationTreeAxios({...payload, language: state.language});
            if(response && response.data) {
                commit("SET_INFORMATION_TREE", response.data);
            }
        }, handleError),
    },
    getters: {
        getProductList: (state) => state.productsList,
        getInformationTree: (state) => state.informationTree,
        getAnalysisStatus: (state) => state.analysisStatus,
        getLanguage: (state) => state.language,
    },
}