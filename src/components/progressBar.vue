<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const p_value = ref<number>(0);
const timerId = ref<number>(-1);

const add_Progress = () => {
  p_value.value++;
  if (p_value.value >= 100) {
    p_value.value = 0;
  }
};

onMounted(() => {
  timerId.value = setInterval(() => {
    add_Progress();
  }, 50);
  onUnmounted(() => {
    if (timerId.value > -1) {
      clearInterval(timerId.value);
      timerId.value = -1;
    }
  });
});
</script>

<template>
  <div class="w-[300px] mx-auto p-2 text-center text-xs font-semibold bg-white">
    <slot></slot>
    <progress class="w-[100%] h-[8px]" max="100" :value="p_value">
      {{ p_value }}
    </progress>
  </div>
</template>

<style scoped></style>
