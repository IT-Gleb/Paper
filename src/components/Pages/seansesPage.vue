<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const m_Base: string = import.meta.env.BASE_URL;

const listSeanses = defineAsyncComponent(() => import("../parts/seanses.vue"));
</script>

<template>
  <header class="w-[100%]">
    <div
      class="max-w-[1180px] mx-auto flex gap-2 place-items-center font-ubuntu font-normal text-col1-900 w-[100%] justify-center text-xl border-b border-y-col1-850"
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

      <!-- Основное меню -->
      <nav class="w-[50%] ml-auto" role="menu">
        <ul
          class="flex place-items-center justify-end gap-4 py-4 font-roboto px-10"
          role="navigation"
        >
          <li class="text-[20px] text-col1-800">
            <RouterLink :to="m_Base">Продукция</RouterLink>
          </li>
          <li class="text-[20px] text-col1-800">
            <RouterLink :to="m_Base">Материалы</RouterLink>
          </li>
          <li class="text-[20px] text-col1-800">
            <RouterLink :to="m_Base">О нас</RouterLink>
          </li>
          <li class="text-[20px] text-col1-800">
            <RouterLink :to="m_Base">Контакты</RouterLink>
          </li>
          <li class="text-[20px] text-col1-800">
            <RouterLink :to="m_Base + 'seanses'">Сеансы</RouterLink>
          </li>
        </ul>
      </nav>
      <!-- End Основное меню -->

      <!-- --Правое меню-- -->
      <div class="flex gap-8 place-items-center pr-10">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_19)">
            <path
              d="M13 19C8.58172 19 5 15.4183 5 11C5 6.58172 8.58172 3 13 3C17.4183 3 21 6.58172 21 11C21 15.4183 17.4183 19 13 19Z"
              stroke="#4C5866"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.0001 20.9999L7.3501 16.6499"
              stroke="#4C5866"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_19">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="matrix(-1 0 0 1 24 0)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_20)">
            <path
              d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
              stroke="#4C5866"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 17L15 12L10 7"
              stroke="#4C5866"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 12H3"
              stroke="#4C5866"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_20">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <!-- End Правое меню -->
    </div>
  </header>

  <!-- Сеансы -->
  <div class="max-w-[1180px] mx-auto">
    <listSeanses></listSeanses>
  </div>
  <!--End Сеансы -->

  <footer class="max-w-[1180px] mx-auto bg-col1-800 text-white">
    <div class="w-[95%] flex place-items-center mx-auto px-4 py-6">
      <div
        class="flex gap-2 place-items-center font-ubuntu font-normal w-fit justify-start text-xl"
      >
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8.5" cy="9" r="8" stroke="#FFFFFF" />
        </svg>
        <span>simple</span>
        <svg
          width="32"
          height="18"
          viewBox="0 0 32 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="1" width="31" height="16" rx="8" stroke="#FFFFFF" />
        </svg>

        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8.5" cy="9" r="8" stroke="#FFFFFF" />
        </svg>
      </div>
      <!-- Соцсети -->
      <div class="w-[80%] mx-auto flex justify-end place-items-center gap-6">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.402 18V11.034H14.735L15.084 8.326H12.402V6.598C12.402 5.814 12.62 5.279 13.744 5.279H15.178V2.857C14.4838 2.78334 13.7861 2.74762 13.088 2.75C11.021 2.75 9.606 4.012 9.606 6.33V8.326H7.268V11.034H9.606V18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H12.402Z"
            fill="white"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_135)">
            <path
              d="M22.1621 5.65593C21.3986 5.99362 20.589 6.2154 19.7601 6.31393C20.6338 5.79136 21.2878 4.96894 21.6001 3.99993C20.7801 4.48793 19.8811 4.82993 18.9441 5.01493C18.3147 4.34151 17.4804 3.89489 16.571 3.74451C15.6616 3.59413 14.728 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0772 6.14972C11.6979 6.98983 11.6068 7.93171 11.8181 8.82893C10.1552 8.74558 8.52838 8.31345 7.04334 7.56059C5.55829 6.80773 4.24818 5.75097 3.19805 4.45893C2.82634 5.09738 2.63101 5.82315 2.63205 6.56193C2.63205 8.01193 3.37005 9.29293 4.49205 10.0429C3.82806 10.022 3.17869 9.84271 2.59805 9.51993V9.57193C2.59825 10.5376 2.93242 11.4735 3.5439 12.221C4.15538 12.9684 5.00653 13.4814 5.95305 13.6729C5.33667 13.84 4.69036 13.8646 4.06305 13.7449C4.32992 14.5762 4.85006 15.3031 5.55064 15.824C6.25123 16.3449 7.09718 16.6337 7.97005 16.6499C7.10253 17.3313 6.10923 17.8349 5.04693 18.1321C3.98464 18.4293 2.87418 18.5142 1.77905 18.3819C3.69075 19.6114 5.91615 20.264 8.18905 20.2619C15.8821 20.2619 20.0891 13.8889 20.0891 8.36193C20.0891 8.18193 20.0841 7.99993 20.0761 7.82193C20.8949 7.23009 21.6017 6.49695 22.1631 5.65693L22.1621 5.65593Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_135">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_138)">
            <path
              d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_138">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_141)">
            <path
              d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_141">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <!-- Логотип в конце -->
    <div class="w-[100%] bg-col1-600 text-center">
      <span class="font-roboto text-col1-800 text-[13px] uppercase"
        >simple
        <span class="text-col1-650 text-[11px]">&#9415;</span> 2021</span
      >
    </div>
  </footer>
</template>

<style></style>
