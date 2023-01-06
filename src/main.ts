import { createApp } from "vue";
import { createPinia } from "pinia";
import "./shared/service/firebase/firebase";
import OneSignalVue from "onesignal-vue-3";
import ElementPlus from "element-plus";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(OneSignalVue, {
  appId: "9c57d7ba-84db-4a43-8994-99329bed784d",
});
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(createPinia());
app.use(router);
app.mount("#app");
