<script setup lang="ts">
const chEmit = defineEmits(["addEvent"]);

const AddClick = (event: MouseEvent) => {
  event.preventDefault();
  chEmit("addEvent");
};
</script>

<template>
  <button
    class="border rounded-full px-2 border-col1-800 w-[24px] h-[24px] text-[9px] text-center active:bg-col1-400 active:text-col1-200"
    title="Добавить/Заменить"
    tabindex="-1"
    @click="AddClick"
  >
    +
  </button>
</template>
