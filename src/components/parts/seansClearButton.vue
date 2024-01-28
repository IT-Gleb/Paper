<script setup lang="ts">
const theEmit = defineEmits(["ClearEvent"]);

const clearBtn = (event: MouseEvent) => {
  event.preventDefault();
  theEmit("ClearEvent");
};
</script>

<template>
  <button
    class="w-[24px] h-[24px] rounded-full border border-col1-900 text-center text-[9px] active:bg-col1-900 active:text-col1-500"
    title="Очистить"
    tabindex="-1"
    @click="clearBtn"
  >
    x
  </button>
</template>
