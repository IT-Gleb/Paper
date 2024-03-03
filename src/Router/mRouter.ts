import { createRouter, createWebHistory } from "vue-router";

const my_base = import.meta.env.BASE_URL;

const appRoutes = [
  {
    path: my_base,
    component: () => import("../components/Pages/MainPage.vue"),
  },
  {
    path: my_base + "seanses",
    component: () => import("../components/Pages/seansesPage.vue"),
  },
];

const appRouter = createRouter({
  history: createWebHistory(),
  routes: appRoutes,
});

export default appRouter;
