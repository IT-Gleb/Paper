<script setup lang="ts">
import { seans_Url } from "../lib";
import useSWRV from "swrv";
import { swrFetcher } from "../reUse/swrFetcher";
import seansesList from "./seansesList.vue";
import addSeansForm from "./addSeansForm.vue";
import { ref } from "vue";
import progressBar from "../progressBar.vue";

const is_showForm = ref<boolean>(false);

const { data, error } = useSWRV(seans_Url.toString(), swrFetcher, {
  revalidateOnFocus: true,
  refreshInterval: 5000,
});

// const revalidateSeanses = async () => {
//   await fetch(seans_Url.toString())
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };

const show_Form = () => {
  is_showForm.value = !is_showForm.value;
};
</script>

<template>
  <section class="w-[80%] mx-auto">
    <div class="w-[100%] flex place-items-stretch justify-between px-20 my-6">
      <h1 class="text-[30px] leading-7 text-col1-950 mb-7">Сеансы:</h1>
      <div>
        <button
          class="rounded-full bg-col1-400 w-10 h-10 text-white text-center text-[24px] pb-4"
          @click="show_Form"
          :title="is_showForm ? 'Закрыть' : 'Открыть'"
        >
          {{ is_showForm ? "-" : "+" }}
        </button>
      </div>
    </div>

    <add-seans-form v-if="is_showForm" @close-form="show_Form"></add-seans-form>

    <p v-if="error" class="text-red-600 text-2xl text-center w-fit mx-auto">
      Какая-то ошибка!!!
    </p>
    <progress-bar v-if="!data && !error">Загрузка...</progress-bar>

    <seansesList v-else-if="data" :list="data"></seansesList>
  </section>
</template>
