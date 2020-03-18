/*  */
require("@adobe/coral-spectrum/dist/js/coral.js");
require("@adobe/coral-spectrum/dist/css/coral.css");

import Vue from "vue";
import Main from "./Main.vue";

new Vue({
  render: h => h(Main),
  components: { Main }
}).$mount("#root");
