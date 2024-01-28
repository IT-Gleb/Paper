<script setup lang="ts">
import { ref, watchEffect } from "vue";
const theEmit = defineEmits(["closeMessageForm", "showMessageForm"]);
const props = defineProps({ showForm: Boolean });
const is_Show = ref<boolean>(props.showForm);

const close_This = (event: MouseEvent) => {
  event.preventDefault();
  is_Show.value = false;
  theEmit("closeMessageForm");
};

watchEffect(() => {
  //console.log(props.showForm);
  is_Show.value = props.showForm;
});
</script>

<template>
  <div
    v-if="is_Show"
    class="fixed left-0 top-0 right-0 bottom-0 bg-black opacity-75"
  ></div>
  <div
    v-if="is_Show"
    class="w-[60%] h-[40%] mx-auto bg-white left-[50%] absolute top-1/4 shadow-xl translate-x-[-50%] transform-gpu shadow-black activeWindow"
  >
    <div class="w-[100%] flex place-items-stretch justify-end bg-col1-950 p-1">
      <div class="w-[90%]">
        <h1 class="uppercase w-fit mx-auto p-2 text-yellow-400">Внимание</h1>
      </div>
      <div>
        <button
          class="border-none px-3 py-1 uppercase text-white"
          @click="close_This"
        >
          x
        </button>
      </div>
    </div>
    <div class="p-6 h-[70%] w-[100%] border-b border-col1-650">
      <slot></slot>
    </div>

    <div class="w-[100%] mx-auto py-4 flex justify-center">
      <button
        class="px-4 py-2 text-sm font-ubuntu border border-col1-950 rounded-md uppercase active:bg-col1-900 active:text-col1-200 hover:shadow-lg hover:border-col1-400"
        @click="close_This"
      >
        OK
      </button>
    </div>
  </div>
</template>

<style scoped>
.activeWindow {
  animation-name: animeWindow;
  animation-duration: 0.75s;
  transition: transform 0.75s ease;
}

@keyframes animeWindow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
