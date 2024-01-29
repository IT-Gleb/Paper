<script setup lang="ts">
import SeansAddButton from "./seansAddButton.vue";
import SeansClearButton from "./seansClearButton.vue";
import { ref, onMounted } from "vue";

const theEmit = defineEmits(["addEvent", "clearEvant"]);
const propTxt = defineProps({
  textValue: String,
  nameValue: String,
  initText: String,
  textInInput: Boolean,
});
const inputRef = ref<HTMLInputElement | null>(null);

const inputValue = ref<string | undefined>("");
const isError = ref<Boolean>(false);

const addValue = () => {
  //   theEmit("addEvent");
  // console.log(propTxt.textValue);
  inputValue.value = propTxt.textValue;
  if (inputRef) inputRef.value?.focus();
};

const clearValue = () => {
  inputValue.value = "";
  if (inputRef) inputRef.value?.focus();
};

const checkValue = (event: any) => {
  isError.value = false;

  let this_val: string = event.target.value;

  if (this_val.trim() === "" || this_val.length < 5) {
    isError.value = true;
  }
};

const thisFocus = () => {
  isError.value = false;
};

onMounted(() => {
  if (propTxt.textInInput) {
    inputValue.value = propTxt.initText;
  }
  // console.log(
  //   propTxt.nameValue,
  //   propTxt.textValue,
  //   propTxt.initText,
  //   propTxt.textInInput
  // );
});
</script>

<template>
  <div class="w-[100%] flex justify-between gap-2 px-1">
    <input
      class="w-[90%] border border-col1-500 rounded-lg focus:outline focus:outline-col1-900 px-4"
      type="text"
      :name="nameValue"
      v-model="inputValue"
      ref="inputRef"
      @blur="checkValue"
      @focus="thisFocus"
      placeholder="Наименование фильма..."
    />
    <seans-add-button @add-event="addValue"></seans-add-button>
    <seans-clear-button @clear-event="clearValue"></seans-clear-button>
  </div>
  <div v-if="isError" class="w-fit mx-auto font-roboto text-xs text-col1-100">
    <span class="font-ubuntu text-rose-600 font-semibold uppercase"
      >Ошибка!!!</span
    >
    Проверьте правильность ввода.
  </div>
</template>
