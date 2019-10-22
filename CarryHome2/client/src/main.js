import Vue from "vue";
//Import Vue Router
import VueRouter from "vue-router";
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

//Import Top Component
import Home from "./components/Home.vue";
import Carry from "./components/Carry/Carry.vue";
import CarryAus from "./components/Carry/CarryAus.vue";
import CarryThai from "./components/Carry/CarryThai.vue";
import Send from "./components/Send/Send.vue";
import SendAus from "./components/Send/SendAus.vue";
import SendThai from "./components/Send/SendThai.vue";

//add them to the library object
library.add(faUser);

//Use Vue Router
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Home
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/carry",
      component: Carry
    },
    {
      path: "/carry/australia",
      component: CarryAus
    },
    {
      path: "/carry/thailand",
      component: CarryThai
    },
    {
      path: "/send",
      component: Send
    },
    {
      path: "/send/australia",
      component: SendAus
    },
    {
      path: "/send/thailand",
      component: SendThai
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
