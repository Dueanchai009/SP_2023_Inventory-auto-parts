import "./assets/main.css";
import "vue3-easy-data-table/dist/style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Vue3EasyDataTable from "vue3-easy-data-table";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const app = createApp(App);
app.component("v-select", vSelect);
app.component("EasyDataTable", Vue3EasyDataTable);
app.use(createPinia());
app.use(router);

app.mount("#app");
