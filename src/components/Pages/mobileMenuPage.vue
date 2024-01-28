<script setup lang="ts">
import { ref } from "vue";
const hide = defineEmits(["hide_Menu", "show_Menu"]);
const animo = ref<boolean>(false);
const menuOut = () => {
  animo.value = true;
  setTimeout(() => {
    hide("hide_Menu");
  }, 300);
};
</script>

<template>
  <div class="w-[100%]" :class="!animo ? 'menuIn' : 'menuOut'">
    <header class="w-[100%]">
      <div
        class="flex gap-2 place-items-center font-ubuntu font-normal text-col1-900 w-[100%] justify-center text-xl border-b border-y-col1-850 h-[45px]"
      >
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8.5" cy="9" r="8" stroke="#4C5866" />
        </svg>
        <span>simple</span>
        <svg
          width="32"
          height="18"
          viewBox="0 0 32 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="1" width="31" height="16" rx="8" stroke="#4C5866" />
        </svg>

        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8.5" cy="9" r="8" stroke="#4C5866" />
        </svg>
      </div>
      <!-- //-------------------------------- -->
    </header>
    <main class="w-100% bg-col1-600">
      <nav class="pb-16">
        <ul class="font-roboto px-6" role="navigation">
          <li class="py-6">
            <!-- <button @click="hide('hide_Menu')"> -->
            <button @click="menuOut">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.75 6.75C6.94891 6.55109 7.2187 6.43934 7.5 6.43934C7.7813 6.43934 8.05109 6.55109 8.25 6.75L23.25 21.75C23.4489 21.9489 23.5606 22.2187 23.5606 22.5C23.5606 22.7813 23.4489 23.0511 23.25 23.25C23.0511 23.4489 22.7813 23.5606 22.5 23.5606C22.2187 23.5606 21.9489 23.4489 21.75 23.25L6.75 8.25C6.55109 8.05109 6.43934 7.7813 6.43934 7.5C6.43934 7.21869 6.55109 6.94891 6.75 6.75Z"
                  fill="#4C5866"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.25 6.75C23.4489 6.94891 23.5607 7.2187 23.5607 7.5C23.5607 7.7813 23.4489 8.05109 23.25 8.25L8.25001 23.25C8.0511 23.4489 7.78132 23.5606 7.50001 23.5606C7.21871 23.5606 6.94893 23.4489 6.75002 23.25C6.55111 23.0511 6.43936 22.7813 6.43936 22.5C6.43936 22.2187 6.5511 21.9489 6.75002 21.75L21.75 6.75C21.9489 6.55109 22.2187 6.43934 22.5 6.43934C22.7813 6.43934 23.0511 6.55109 23.25 6.75Z"
                  fill="#4C5866"
                />
              </svg>
            </button>
          </li>
          <li class="pb-12 text-[18px]"><a href="#">Продукция</a></li>
          <li class="pb-12 text-[18px]"><a href="#">Материалы</a></li>
          <li class="pb-12 text-[18px]"><a href="#">О нас</a></li>
          <li class="pb-12 text-[18px]"><a href="#">Контакты</a></li>
        </ul>
      </nav>
    </main>
  </div>
</template>

<style scoped>
.menuIn {
  animation-name: animateMenu;
  animation-duration: 0.5s;
}

.menuOut {
  animation-name: animateMenuOut;
  animation-duration: 0.5s;
}

@keyframes animateMenu {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes animateMenuOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-320px);
    opacity: 0;
  }
}
</style>
