import { createRouter, createWebHistory } from "vue-router";

const appRoutes = [
  {
    path: "/Paper/",
    component: () => import("../components/Pages/MainPage.vue"),
  },
  {
    path: "/Paper/seanses",
    component: () => import("../components/Pages/seansesPage.vue"),
  },
];

const appRouter = createRouter({
  history: createWebHistory(),
  routes: appRoutes,
});

export default appRouter;
