import "bootstrap/dist/js/bootstrap.bundle";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .mount("#app");

/**
 * vue router
 * @link https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/
 */
