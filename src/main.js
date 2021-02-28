import Vue from "vue";
// import App from "./App.vue";

import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App.vue";
import "./scss/style.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount("#app");

// // var easymidi = require('easymidi');
// var easymidi = require("../node_modules/easymidi/index");
// // var output = new easymidi.Output('MIDI Output Name');
// console.log(easymidi);
// /* output.send('noteon', {
//   note: 64,
//   velocity: 127,
//   channel: 3
// }); */
