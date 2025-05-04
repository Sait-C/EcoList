import { createRouter, createWebHistory } from "vue-router";

const homeChildRoutes = [
  {
    path: "",
    name: "index",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "liste-yukle",
    name: "upload-list",
    component: () => import("../pages/UploadList.vue"),
  },
  {
    path: "analiz-sonucu",
    name: "analysis-result",
    component: () => import("../pages/AnalysisResult.vue"),
  },
  {
    path: "alternatifler",
    name: "alternatives",
    component: () => import("../pages/AlternativesPage.vue"),
  },
];

const routes = [
  {
    path: "",
    name: "home",
    component: () => import("../layouts/main/MainLayout"),
    children: homeChildRoutes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
