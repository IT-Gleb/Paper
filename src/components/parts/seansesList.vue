<script setup lang="ts">
import seansItem from "./seansItem.vue";
import { ref } from "vue";

let isData = ref<boolean>(false);

const props = defineProps({
  list: Object,
});

isData.value = props.list != undefined;
</script>

<template>
  <h1 class="text-xl first-letter:text-2xl font-roboto font-bold mb-4">
    Список сеансов в базе данных
  </h1>
  <div
    v-if="isData"
    class="max-w-[95%] mx-auto max-h-[70vh] overflow-x-hidden overflow-y-auto"
  >
    <div v-for="item in props.list" :key="item.id">
      <seans-item :data="item"></seans-item>
    </div>
  </div>
</template>
