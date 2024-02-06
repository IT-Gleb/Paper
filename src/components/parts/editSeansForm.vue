<script setup lang="ts">
import { ref } from "vue";
import useSWRV from "swrv";
import { swrFetcher } from "../reUse/swrFetcher";
import { Films_Url_sorted } from "../lib";
import inputSeans from "./inputSeans.vue";
import progressBar from "../progressBar.vue";

const theEmit = defineEmits(["closeEditForm"]);
const props = defineProps({ seansId: String });

const text_in_input = ref<boolean>(true);
const selectedText = ref<string>("");
const is_ShowAddBtn = ref<boolean>(false);
const dataJSON = ref<any>({});
const editForm = ref<any>(undefined);

const Seans_URL_Id = new URL(
  "https://639e05c83542a26130555cae.mockapi.io/IdSeanses"
);
Seans_URL_Id.searchParams.append("id", `${props.seansId}`);

const Seans_URL_with_Id = `https://639e05c83542a26130555cae.mockapi.io/IdSeanses/${props.seansId}`;

// console.log(Seans_URL_Id);

const closeFrm = (event: MouseEvent) => {
  event.preventDefault();
  event.stopPropagation();
  theEmit("closeEditForm");
};

const { data: films, error: filmsError } = useSWRV(
  Films_Url_sorted.toString(),
  swrFetcher
);

const { data: seans, error: ErrorSeans } = useSWRV(
  Seans_URL_Id.toString(),
  swrFetcher
);

const addBtnClick = (event: MouseEvent) => {
  event.preventDefault();

  dataJSON.value = {
    // id: props.seansId,
    // day: editForm.value.day.value,
    seanses: [
      {
        number: 1,
        seans: editForm.value.timeSeans1.value,
        title: editForm.value.seans1.value,
      },
      {
        number: 2,
        seans: editForm.value.timeSeans2.value,
        title: editForm.value.seans2.value,
      },
      {
        number: 3,
        seans: editForm.value.timeSeans3.value,
        title: editForm.value.seans3.value,
      },
      {
        number: 4,
        seans: editForm.value.timeSeans4.value,
        title: editForm.value.seans4.value,
      },
      {
        number: 5,
        seans: editForm.value.timeSeans5.value,
        title: editForm.value.seans5.value,
      },
      {
        number: 6,
        seans: editForm.value.timeSeans6.value,
        title: editForm.value.seans6.value,
      },
      {
        number: 7,
        seans: editForm.value.timeSeans7.value,
        title: editForm.value.seans7.value,
      },
    ],
  };

  //   console.log(dataJSON.value);
  try {
    updateSeansDb();
  } finally {
    theEmit("closeEditForm");
  }
};

const updateSeansDb = async () => {
  await fetch(Seans_URL_with_Id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataJSON.value),
  })
    .then((res) => {
      if (res.ok) {
        res.json();
      }
    })
    // .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
</script>

<template>
  <div
    class="w-[100%] fixed left-0 top-0 right-0 bottom-0 bg-black opacity-75"
  ></div>
  <div
    class="w-[70%] min-h-[35vh] mt-[10%] top-5 left-[15%] absolute bg-white p-8 z-10 flex flex-col shadow-xl shadow-black rounded-xl border-8 border-col1-700"
  >
    <p v-if="filmsError">Ошибка!!! не смог загрузить список фильмов.</p>
    <progress-bar v-else-if="!filmsError && !films"
      >Идет загрузка...</progress-bar
    >

    <div
      class="w-[100%] flex-grow flex place-items-stretch justify-center border-b border-l border-r"
    >
      <div v-if="films" class="w-[40%] border-r">
        <select
          class="w-[100%] font-roboto active:outline-none focus:outline-none pl-2"
          name="films"
          size="12"
          v-model="selectedText"
        >
          <option
            class="px-2 py-2 text-col1-200 bg-slate-600 uppercase sticky top-0"
            disabled
          >
            <span class="w-fit mx-auto">--- Список фильмов ---</span>
          </option>
          <option
            class="odd:bg-rose-50 p-1 text-md text-black font-roboto"
            v-for="(film, index) in films"
            :key="film.id"
            :value="film.title"
            :selected="index === 0 ? true : false"
          >
            {{ film.title }}
          </option>
        </select>
      </div>
      <p v-if="ErrorSeans">Ошибка!!! Не могу получить данные...</p>
      <progress-bar v-if="!ErrorSeans && !seans">данные сеанса...</progress-bar>
      <div v-if="seans" class="w-[60%] px-4">
        <span class="text-md font-ubuntu"
          >Дата сеанса:
          <span class="font-ubuntu text-xl font-semibold">
            {{ seans[0]["day"] }}
          </span> </span
        ><br />
        <form action="#" ref="editForm">
          <input type="hidden" name="day" :value="seans[0]['day']" />
          <input-seans
            paramTimeSeans="09:00-10:30"
            :inputText="selectedText"
            nameValue="seans1"
            nameSeans="timeSeans1"
            :initText="seans[0].seanses[0].title"
            :paramIn="text_in_input"
          ></input-seans>
          <input-seans
            paramTimeSeans="11:00-12:30"
            :inputText="selectedText"
            nameValue="seans2"
            nameSeans="timeSeans2"
            :initText="seans[0].seanses[1].title"
            :paramIn="text_in_input"
          ></input-seans>
          <input-seans
            paramTimeSeans="13:00-14:30"
            :inputText="selectedText"
            nameValue="seans3"
            nameSeans="timeSeans3"
            :initText="seans[0].seanses[2].title"
            :paramIn="text_in_input"
          ></input-seans>
          <input-seans
            paramTimeSeans="15:00-16:30"
            :inputText="selectedText"
            nameValue="seans4"
            nameSeans="timeSeans4"
            :initText="seans[0].seanses[3].title"
            :paramIn="text_in_input"
          ></input-seans>
          <input-seans
            paramTimeSeans="17:00-18:30"
            :inputText="selectedText"
            nameValue="seans5"
            nameSeans="timeSeans5"
            :initText="seans[0].seanses[4].title"
            :paramIn="text_in_input"
          ></input-seans>
          <input-seans
            paramTimeSeans="19:00-20:30"
            :inputText="selectedText"
            nameValue="seans6"
            nameSeans="timeSeans6"
            :initText="seans[0].seanses[5].title"
            :paramIn="text_in_input"
          ></input-seans>
          <input-seans
            paramTimeSeans="21:00-22:30"
            :inputText="selectedText"
            nameValue="seans7"
            nameSeans="timeSeans7"
            :initText="seans[0].seanses[6].title"
            :paramIn="text_in_input"
          ></input-seans>
        </form>
      </div>
    </div>

    <div
      class="w-[80%] flex-shrink-0 mx-auto mt-5 p-4 place-items-center justify-evenly"
    >
      <div class="flex gap-4 font-ubuntu text-md">
        Сохранить:
        <label class="flex gap-2 justify-center text-sm cursor-pointer">
          <input
            type="radio"
            id="radio1"
            :value="true"
            v-model="is_ShowAddBtn"
          />Изменить
        </label>
        <label class="flex gap-2 justify-center text-sm cursor-pointer">
          <input
            type="radio"
            id="radio1"
            :value="false"
            v-model="is_ShowAddBtn"
          />Нет
        </label>
      </div>

      <div
        class="w-[100%] mb-2 flex place-items-stretch justify-end gap-8 font-roboto"
      >
        <button
          v-if="is_ShowAddBtn"
          class="bg-rose-500 text-white px-2 py-1 text-sm border-2 border-col1-800 rounded-md active:bg-rose-100 active:text-black hover:border-yellow-500 hover:shadow-md"
          @click="addBtnClick"
        >
          Изменить
        </button>
        <button
          class="bg-green-200 text-black px-2 py-1 text-sm border-2 border-col1-800 rounded-md active:bg-col1-700 active:text-white hover:border-yellow-500 hover:shadow-md"
          @click="closeFrm"
        >
          Закрыть
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
