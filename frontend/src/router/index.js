import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'
import UploadList from '../pages/UploadList.vue'
import AnalysisResult from '../pages/AnalysisResult.vue'
import Alternatives from '../pages/AlternativesPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/liste-yukle', name: 'UploadList', component: UploadList },
  { path: '/analiz-sonucu', name: 'AnalysisResult', component: AnalysisResult },
  { path: '/alternatifler', name: 'Alternatives', component: Alternatives },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 