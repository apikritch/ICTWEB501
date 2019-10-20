import Vue from "vue";
import App from "./App.vue";

//Import Bootstrap Javascript
import "bootstrap";
//Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
//Import CSS
import "../src/assets/css/style.css";
//Import Animate CSS
import "animate.css/animate.css";
//Import Fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
//Import Fontawesome Icon
import { faUser } from "@fortawesome/free-solid-svg-icons";

//add them to the library object
library.add(faUser);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
