import { createApp } from "vue";
import { createPinia } from "pinia";
import store from "@/stores/vuexSate"
import "./shared/service/firebase/firebase";
import OneSignalVue from "onesignal-vue-3";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(OneSignalVue, {appId: "9c57d7ba-84db-4a43-8994-99329bed784d"});
app.use(ElementPlus, { size: 'small', zIndex: 8000 })
app.use(createPinia());
app.use(router);
app.use(store)
app.mount("#app");
