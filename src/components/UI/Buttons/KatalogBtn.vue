<script setup lang="ts">
// import { defineProps } from "vue";
interface MyProps {
  title: string;
}

const abc = defineProps<MyProps>();
// console.log(abc.title);
</script>

<template>
  <button
    class="border border-col1-100 text-col1-100 px-12 py-4 font-roboto text-xl w-[176px] h-[63px]"
  >
    {{ abc.title }}
  </button>
</template>

<style></style>
