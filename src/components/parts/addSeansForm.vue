<script setup lang="ts">
import { Films_Url_sorted, SeansesUrl, check_Length, getNowDay } from "../lib";
import useSWRV from "swrv";
import { swrFetcher } from "../reUse/swrFetcher";
import { ref, onMounted, onUnmounted } from "vue";
import InputSeans from "./inputSeans.vue";
import progressBar from "../progressBar.vue";
import messageForm from "../Pages/message/messageForm.vue";

const theEmit = defineEmits(["closeForm"]);
const sForm = ref<any>(undefined);
const dataJSON = ref<any>(undefined);
const DayInput = ref<string>(getNowDay());
const is_showMessageForm = ref<boolean>(false);
const messageStr = ref<string>("");

//DayInput.value = getNowDay();

const textIn = ref<boolean>(false);

const { data: films, error } = useSWRV(Films_Url_sorted.toString(), swrFetcher);

const selectedFilm = ref<string>("");
const is_showAddButton = ref<Boolean>(false);
let timerId: number = -1;

const updateSeansDb = async () => {
  await fetch(SeansesUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataJSON.value),
  })
    // .then((res) => res.json())
    // .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const ok_Form = (event: MouseEvent) => {
  event.preventDefault();
  // console.log(sForm.value.dateSeans.value);
  // console.log(sForm.value.timeSeans1.value);
  // console.log(sForm.value.seans1.value);
  dataJSON.value = {
    day: sForm.value.dateSeans.value,
    seanses: [
      {
        number: 1,
        seans: sForm.value.timeSeans1.value,
        title: sForm.value.seans1.value,
      },
      {
        number: 2,
        seans: sForm.value.timeSeans2.value,
        title: sForm.value.seans2.value,
      },
      {
        number: 3,
        seans: sForm.value.timeSeans3.value,
        title: sForm.value.seans3.value,
      },
      {
        number: 4,
        seans: sForm.value.timeSeans4.value,
        title: sForm.value.seans4.value,
      },
      {
        number: 5,
        seans: sForm.value.timeSeans5.value,
        title: sForm.value.seans5.value,
      },
      {
        number: 6,
        seans: sForm.value.timeSeans6.value,
        title: sForm.value.seans6.value,
      },
      {
        number: 7,
        seans: sForm.value.timeSeans7.value,
        title: sForm.value.seans7.value,
      },
    ],
  };
  // console.log(dataJSON);
  try {
    //    updateSeansDb();
    check_Seans_exist(dataJSON.value.day);
  } catch (err) {
    console.log("Какая-то ошибка!");
  }
};

const check_Seans_exist = async (param1: String) => {
  try {
    await fetch(
      `https://639e05c83542a26130555cae.mockapi.io/IdSeanses/?day=${param1}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (!res.ok) {
          updateSeansDb(); //Добавить данные в базу
          theEmit("closeForm"); //Закрыть форму с вводом нового сеанса
          return res.json();
        } else {
          messageStr.value = `Сеанс за  дату << ${param1} >> уже существует. Измените дату. И заново введите данные!`;
          show_Message();
        }
      })
      // .then((data) => {
      //   if (data) console.log(data);
      // })
      .catch((err) => {
        console.log(err, "ОШИБКА !!!");
      });
  } catch (err) {
    console.log("not Found...");
  }
  // console.log(result);
};

const cancel_Form = (event: MouseEvent) => {
  event.preventDefault();
  theEmit("closeForm");
};
// console.log(films);
const check_Values = () => {
  let ok: boolean[] = [];
  is_showAddButton.value = false;
  ok[0] = check_Length(sForm.value.dateSeans.value, 8);
  ok[1] = check_Length(sForm.value.seans1.value, 5);
  ok[2] = check_Length(sForm.value.seans2.value, 5);
  ok[3] = check_Length(sForm.value.seans3.value, 5);
  ok[4] = check_Length(sForm.value.seans4.value, 5);
  ok[5] = check_Length(sForm.value.seans5.value, 5);
  ok[6] = check_Length(sForm.value.seans6.value, 5);
  ok[7] = check_Length(sForm.value.seans7.value, 5);
  if (ok[0] && ok[1] && ok[2] && ok[3] && ok[4] && ok[5] && ok[6] && ok[7]) {
    is_showAddButton.value = true;
  }
};

const show_Message = () => {
  is_showMessageForm.value = true;
  // console.log("Показать форму...");
};

onMounted(() => {
  timerId = setInterval(() => {
    check_Values();
  }, 1200);
});
onUnmounted(() => {
  if (timerId !== -1) {
    clearInterval(timerId);
  }
});
</script>

<template>
  <p v-if="error">Ошибка получения списка фильмов!</p>

  <progress-bar v-else-if="!error && !films">Идет загрузка...</progress-bar>

  <div
    v-else-if="!error && films"
    class="w-[100%] rounded-xl border-2 border-col1-750 mb-6 px-8 pt-8 shadow-md flex"
  >
    <div class="w-[45%]">
      <label class="text-lg font-ubuntu font-bold">
        <select
          class="w-[100%] focus: outline-1 focus:outline-col1-700"
          name="FilmsList"
          size="12"
          v-model="selectedFilm"
        >
          <option
            class="px-14 py-1 font-roboto font-bold bg-slate-600 text-col1-200 uppercase sticky top-0"
            disabled
          >
            ---Список фильмов---
          </option>
          <option
            class="px-1 odd:bg-rose-50"
            v-for="film in films"
            :key="film.id"
            :value="film.title"
          >
            {{ film.title }}
          </option>
        </select>
      </label>
    </div>
    <form
      ref="sForm"
      action="#"
      class="mb-10 w-[55%] mx-auto pl-2"
      name="SeansesForm"
    >
      <fieldset>
        <label class="w-[100%] mb-4">
          <p class="text-md text-col1-700 font-roboto font-bold">
            Дата сеанса:
            <input
              class="ml-8 mb-4 px-4 py-1 border border-col1-700 rounded-lg focus:outline-col1-400 font-medium"
              type="date"
              required
              name="dateSeans"
              v-model="DayInput"
            />
          </p>
        </label>
        <input-seans
          param-time-seans="09:00-10:30"
          :inputText="selectedFilm"
          :InitText="''"
          nameValue="seans1"
          nameSeans="timeSeans1"
          :paramIn="textIn"
        ></input-seans>
        <input-seans
          param-time-seans="11:00-12:30"
          :inputText="selectedFilm"
          :InitText="''"
          nameValue="seans2"
          nameSeans="timeSeans2"
          :paramIn="textIn"
        ></input-seans>
        <input-seans
          param-time-seans="14:00-15:30"
          :inputText="selectedFilm"
          :InitText="''"
          nameValue="seans3"
          nameSeans="timeSeans3"
          :paramIn="textIn"
        ></input-seans>
        <input-seans
          param-time-seans="16:00-17:30"
          :inputText="selectedFilm"
          nameValue="seans4"
          nameSeans="timeSeans4"
          :paramInitText="''"
          :paramIn="textIn"
        ></input-seans>
        <input-seans
          param-time-seans="18:00-19:30"
          :inputText="selectedFilm"
          nameValue="seans5"
          nameSeans="timeSeans5"
          :InitText="''"
          :paramIn="textIn"
        ></input-seans>
        <input-seans
          param-time-seans="20:00-21:30"
          :inputText="selectedFilm"
          nameValue="seans6"
          nameSeans="timeSeans6"
          :paramInitText="''"
          :paramIn="textIn"
        ></input-seans>
        <input-seans
          param-time-seans="22:00-23:30"
          :inputText="selectedFilm"
          nameValue="seans7"
          nameSeans="timeSeans7"
          :InitText="''"
          :paramIn="textIn"
        ></input-seans>
      </fieldset>
      <div class="flex gap-10 place-items-center justify-end pt-8">
        <button
          v-if="is_showAddButton"
          class="border rounded-md bg-green-700 text-col1-600 border-col1-550 px-6 py-1 active:bg-green-200 active:text-col1-500 hover:shadow-lg font-roboto text-sm"
          @click="ok_Form"
        >
          Добавить(+)
        </button>
        <button
          class="border rounded-md bg-rose-400 text-col1-600 border-col1-550 px-6 py-1 active:bg-rose-100 active:text-col1-500 hover:shadow-lg font-roboto text-sm"
          @click="cancel_Form"
        >
          Отменить
        </button>
      </div>
    </form>
  </div>
  <message-form
    :showForm="is_showMessageForm"
    @show-message-form="show_Message"
    @close-message-form="
      () => {
        is_showMessageForm = false;
      }
    "
    >{{ messageStr }}
  </message-form>
</template>
