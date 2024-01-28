<script setup lang="ts">
import { defineAsyncComponent, ref, onMounted, onUnmounted } from "vue";

const mobilePage = defineAsyncComponent(() => import("./mobilePage.vue"));
const mobileMenu = defineAsyncComponent(() => import("./mobileMenuPage.vue"));
const tabletPage1 = defineAsyncComponent(() => import("./tablet1Page.vue"));
const tabletPage2 = defineAsyncComponent(() => import("./tablet2Page.vue"));
const desktopPage = defineAsyncComponent(() => import("./desktopPage.vue"));

const is_showMenu = ref<boolean>(true);
const isMobile = ref<boolean>(false);
const isTablet1 = ref<boolean>(false);
const isTablet2 = ref<boolean>(false);
const isDesktop = ref<boolean>(false);

const queries = [
  "(min-width:220px) and (max-width: 575.98px)",
  "(min-width: 576px) and (max-width: 767.98px)",
  "(min-width: 768px) and (max-width: 1149.98px)",
  "(min-width: 1150px) and (max-width: 6400px)",
];

const mediaQueryLists = queries.map((query) => window.matchMedia(query));
const getValues = () => mediaQueryLists.map((mql) => mql.matches);
const myCallBack = () => {
  isMobile.value = false;
  isTablet1.value = false;
  isTablet2.value = false;
  isDesktop.value = false;
  // for (let i: number = 0; i < getValues().length; i++) {
  isMobile.value = getValues()[0];
  isTablet1.value = getValues()[1];
  isTablet2.value = getValues()[2];
  isDesktop.value = getValues()[3];
  // }
  // console.log(
  //   isMobile.value,
  //   isTablet1.value,
  //   isTablet2.value,
  //   isDesktop.value
  // );
};

const useMatchMedia = () => {
  myCallBack();
  mediaQueryLists.forEach((mql) => mql.addEventListener("change", myCallBack));
};

onMounted(() => {
  useMatchMedia();
});

onUnmounted(() => {
  mediaQueryLists.forEach((mql) =>
    mql.removeEventListener("change", myCallBack)
  );
  // console.log("unmounted...");
});
</script>

<template>
  <Suspense>
    <template #fallback>loading</template>
    <component
      :is="is_showMenu ? mobilePage : mobileMenu"
      v-if="isMobile"
      @hide_Menu="() => (is_showMenu = true)"
      @show_Menu="() => (is_showMenu = false)"
    ></component>
    <component v-else-if="isTablet1" :is="tabletPage1"></component>
    <component v-else-if="isTablet2" :is="tabletPage2"></component>
    <component v-else-if="isDesktop" :is="desktopPage"></component>
  </Suspense>
</template>

<style></style>
