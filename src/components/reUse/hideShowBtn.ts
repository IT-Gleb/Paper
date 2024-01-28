import { defineAsyncComponent, ref } from "vue";

export function useUpButton() {
  const do_Show = ref<boolean>(false);

  const hide_Button = () => {
    do_Show.value = false;
  };
  const show_Button = () => {
    do_Show.value = true;
  };

  return {
    do_Show,
    hide_Button,
    show_Button,
  };
}

export function useNeededComponents() {
  const KatalogBtn = defineAsyncComponent(
    () => import("../UI/Buttons/KatalogBtn.vue")
  );
  const textBtn = defineAsyncComponent(
    () => import("../UI/Buttons/textBtn.vue")
  );
  const upBtn = defineAsyncComponent(() => import("../UI/Buttons/upBtn.vue"));
  const Hamburger = defineAsyncComponent(
    () => import("../UI/Buttons/HamburgerBtn.vue")
  );

  return {
    KatalogBtn,
    textBtn,
    upBtn,
    Hamburger,
  };
}
