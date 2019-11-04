import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue";
import { sync } from "vuex-router-sync";
import store from "@/store/store";
import Vuelidate from "vuelidate";
import moment from "moment";

//Import Bootstrap Javascript
import "bootstrap";
//Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//Import CSS
import "../src/assets/css/style.css";
//Import Animate CSS
import "animate.css/animate.css";
//Import Fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
//Import Fontawesome Icon
import { faUserCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

//add them to the library object
library.add(faUserCircle, faPaperPlane);

sync(store, router);

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("dddd, DD/MM/YYYY");
  }
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
