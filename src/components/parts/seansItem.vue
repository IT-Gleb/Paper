<script setup lang="ts">
import { ref } from "vue";
import editSeansForm from "./editSeansForm.vue";

const props = defineProps({
  data: Object,
});

const is_ShowEditForm = ref<boolean>(false);

//console.log(props);
</script>

<template>
  <edit-seans-form
    v-if="is_ShowEditForm"
    :seans-id="props.data?.id"
    @close-edit-form="
      () => {
        is_ShowEditForm = false;
      }
    "
  ></edit-seans-form>
  <article
    v-if="props"
    class="max-w-[80%] mx-auto border-b border-col1-550 mb-4"
  >
    <div class="w-[100%] flex place-items-start justify-between mt-2">
      <h1 class="text-2xl font-bold">
        {{ props.data?.day }}
      </h1>
      <button
        class="bg-col1-200 outline outline-col1-700 px-2 py-1 rounded-sm text-col1-800 active:bg-col1-950 active:text-col1-200 hover:shadow-lg hover:outline-col1-400"
        @click="
          () => {
            is_ShowEditForm = true;
          }
        "
      >
        Изменить
      </button>
    </div>
    <ul class="mb-4">
      <li
        v-for="item in props.data?.seanses"
        :key="item.number"
        class="odd:bg-rose-50 odd:text-col1-950"
      >
        <span>{{ item.number }}</span
        >. <span>{{ item.seans }}</span> -
        <span class="font-ubuntu text-lg first-letter:text-xl text-col1-900">{{
          item.title
        }}</span>
      </li>
    </ul>
  </article>
</template>
