import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./registerServiceWorker";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const toastOptions = { timeout: 3000 };

import globalComponent from "./plugins/global-components";

const app = createApp(App);

app.use(store);
app.use(router);

app.use(Toast, toastOptions);

app.use(globalComponent);

app.mount("#app");

export default app;
