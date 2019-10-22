import Vue from "vue";
import App from "./App.vue";

//Import Vue Router
import VueRouter from "vue-router";

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

//Import Top Component
import Top from "./components/Top.vue";
import HomeText from "./components/Home/HomeText.vue";
import HomeContent from "./components/Home/HomeContent.vue";

//add them to the library object
library.add(faUser);

//Use Vue Router
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Top
    },
    {
      path: "/home",
      component: HomeText,
      HomeContent
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
