import { createApp } from "vue";
import "/src/assets/css/styles.css";
import appRouter from "./Router/mRouter";
import vInterceptBtn from "./components/directives/interceptBtn";
import App from "./App.vue";

const thisApp = createApp(App);

thisApp.directive(vInterceptBtn.name, vInterceptBtn);

thisApp.use(appRouter).mount("#app");
