<script setup lang="ts">
import seansInput from "./seansInput.vue";

const props = defineProps({
  paramTimeSeans: String,
  inputText: String,
  nameValue: String,
  nameSeans: String,
  initText: String,
  paramIn: Boolean,
});
</script>

<template>
  <label class="w-[100%] mb-3 flex flex-wrap">
    <input type="hidden" :name="nameSeans" :value="paramTimeSeans" />
    <span class="text-[10px] font-roboto font-semibold">{{
      paramTimeSeans
    }}</span>
    <seans-input
      :nameValue="props.nameValue"
      :textValue="props.inputText"
      :initText="props.initText"
      :textInInput="props.paramIn"
    ></seans-input>
  </label>
</template>
