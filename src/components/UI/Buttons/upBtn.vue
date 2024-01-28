<script setup lang="ts">
defineProps({
  is_show: Boolean,
});

const toUp = () => {
  window.scrollTo(0, 0);
};
</script>

<template>
  <div
    v-if="is_show"
    class="fixed bg-col1-900 right-8 bottom-10 border-2 border-col1-950 rounded-lg p-0 m-0 pt-2 px-2 scale-75 text-white visibleBtn"
  >
    <button
      class="text-white p-0 m-0 active:bg-col1-400 scale-75"
      @click="toUp"
      title="К началу"
    >
      <svg
        enable-background="new 0 0 32 32"
        height="32px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 32 32"
        width="32px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
          fill="#FFFFFF"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.visibleBtn {
  animation-name: animo_visible;
  animation-duration: 0.5s;
}

@keyframes animo_visible {
  0% {
    opacity: 0;
    transform: translateY(-300px) scale(75%);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(75%);
  }
}
</style>
