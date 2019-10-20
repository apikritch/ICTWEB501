<template>
  <div id="app">
    <div class="filter position-absolute pb-5">
      <div class="container-fluid">
        <div class="row justify-content-end mt-3 mr-3">
          <p class="plain-text-25 text-white position-absolute">Log In</p>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-md-center">
          <h1 class="logo-font text-white mt-3 mb-5">CH</h1>
        </div>
        <!--Home Text-->
        <home-middle-text :home="home" :homeState="homeState"></home-middle-text>
        <!--Home Text-->

        <!--Carry Text-->
        <carry-middle-text :carry="carry" :carryState="carryState"></carry-middle-text>
        <!--Carry Text-->

        <!--Carry Aus Text-->
        <carry-aus-middle-text :carryAus="carryAus" :carryAusState="carryAusState"></carry-aus-middle-text>
        <!--Carry Aus Text-->

        <!--Carry Thai Text-->
        <carry-thai-middle-text :carryThai="carryThai" :carruyThaiState="carryThaiState"></carry-thai-middle-text>
        <!--Carry Thai Text-->

        <!--Send Text-->
        <send-middle-text :send="send" :sendState="sendState"></send-middle-text>
        <!--Send Text-->

        <!--Send Aus Text-->
        <send-aus-middle-text :sendAus="sendAus" :sendAusState="sendAusState"></send-aus-middle-text>
        <!--Send Aus Text-->

        <!--Send Thai Text-->
        <send-thai-middle-text :sendThai="sendThai" :sendThaiState="sendThaiState"></send-thai-middle-text>
        <!--Send Aus Text-->

        <hr class="bg-light mb-3 w-50" />
        <!--Home Content-->
        <div v-if="homeContent">
          <div class="row" :class="homeContentState">
            <div class="col-sm-6 mt-5">
              <div class="row justify-content-md-center">
                <h6 class="plain-text-25 text-white">I'll</h6>
              </div>
              <div class="row justify-content-md-center">
                <a
                  href="#"
                  @click="home = !home, carry = !carry, homeContent = !homeContent, carryContent = !carryContent"
                >
                  <h1 class="button-text text-orange">Carry</h1>
                </a>
              </div>
              <div class="row justify-content-md-center">
                <h6 class="plain-text-25 text-white">Things for you</h6>
              </div>
            </div>
            <div class="col-sm-6 mt-5">
              <div class="row justify-content-md-center">
                <h6 class="plain-text-25 text-white">Wanna</h6>
              </div>
              <div class="row justify-content-md-center">
                <a
                  href="#"
                  @click="home = !home, send = !send, homeContent = !homeContent, sendContent = !sendContent"
                >
                  <h1 class="button-text text-orange">Send</h1>
                </a>
              </div>
              <div class="row justify-content-md-center">
                <h6 class="plain-text-25 text-white">Things to another Country</h6>
              </div>
            </div>
          </div>
        </div>
        <!--Home Content-->

        <!--Carry Content-->
        <div v-if="carryContent">
          <div class="row" :class="carryContentState">
            <div class="col-sm-6 mt-5">
              <div class="row justify-content-md-center">
                <a
                  href="#"
                  @click="carry = !carry, carryContent = !carryContent, carryAus = !carryAus, carryAusContent = !carryAusContent"
                >
                  <h1 class="button-text text-orange">Australia</h1>
                </a>
              </div>
              <div class="row justify-content-md-center">
                <h6 class="plain-text-25 text-white">To Thailand</h6>
              </div>
            </div>
            <div class="col-sm-6 mt-5">
              <div class="row justify-content-md-center">
                <a
                  href="#"
                  @click="carry = !carry, carryContent = !carryContent, carryThai = !carryThai, carryThaiContent = !carryThaiContent"
                >
                  <h1 class="button-text text-orange">Thailand</h1>
                </a>
              </div>
              <div class="row justify-content-md-center">
                <h6 class="plain-text-25 text-white">To Australia</h6>
              </div>
            </div>
          </div>
        </div>
        <!--Carry Content-->

        <!--CarryAus Content-->
        <div v-if="carryAusContent">
          <div class="row" :class="carryAusContentState">
            <div class="col mt-3">
              <div class="row justify-content-md-center mb-3">
                <div>
                  <label for="carryAusState" class="text-orange d-block">State</label>
                  <select
                    id="carryAusState"
                    type="text"
                    class="form-control block"
                    @change="showButton($event)"
                  >
                    <option value selected>Choose</option>
                    <option v-for="state in states" :value="state.name" :key="state.name">
                      {{
                      state.name
                      }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-sm-6">
                  <div class="row justify-content-md-end mr-1">
                    <div>
                      <label for="carryAusFrom" class="text-orange d-block">From</label>
                      <select
                        id="carryAusFrom"
                        type="text"
                        class="form-control block"
                        @change="showButton($event)"
                      >
                        <option value selected>Choose</option>
                        <option v-for="state in states" :value="state.name" :key="state.name">
                          {{
                          state.name
                          }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="row justify-content-md-start ml-1">
                    <div>
                      <label for="carryAusTo" class="text-orange d-block">To</label>
                      <select
                        id="carryAusTo"
                        type="text"
                        class="form-control block"
                        @change="showButton($event)"
                      >
                        <option value selected>Choose</option>
                        <option v-for="state in states" :value="state.name" :key="state.name">
                          {{
                          state.name
                          }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-md-center">
                <button type="button" class="btn btn-orange px-5 py-2" v-if="location == true">Next</button>
              </div>
            </div>
          </div>
        </div>

        <!--CarryAus Content-->

        <!--CarryThai Content-->
        <div v-if="carryThaiContent">
          <div class="row" :class="carryThaiContentState">fnhm,lj;,</div>
        </div>
        <!--CarryThai Content-->

        <!--Send Content-->
        <div v-if="sendContent">
          <div class="row" :class="sendContentState">
            <div class="col-sm-6 mt-5">
              <div class="row justify-content-md-center">
                <a
                  href="#"
                  @click="send = !send, sendContent = !sendContent, sendAus = !sendAus, sendAusContent = !sendAusContent"
                >
                  <h1 class="button-text text-orange">Australia</h1>
                </a>
              </div>
              <div class="row justify-content-md-center">
                <h6 class="plain-text-25 text-white">To Thailand</h6>
              </div>
            </div>
            <div class="col-sm-6 mt-5">
              <div class="row justify-content-md-center">
                <a
                  href="#"
                  @click="send = !send, sendContent = !sendContent, sendThai = !sendThai, sendThaiContent = !sendThaiContent"
                >
                  <h1 class="button-text text-orange">Thailand</h1>
                </a>
              </div>
              <div class="row justify-content-md-center">
                <h6 class="plain-text-25 text-white">To Australia</h6>
              </div>
            </div>
          </div>
        </div>
        <!--Send Content-->
      </div>
    </div>
  </div>
</template>

<script>
//Import Fontawesome Component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//Import HomeMiddleText Component
import HomeMiddleText from "./components/HomeMiddleText.vue";
//Import CarryMiddleText Component
import CarryMiddleText from "./components/CarryMiddleText.vue";
//Import CarryAusMiddleText Component
import CarryAusMiddleText from "./components/CarryAusMiddleText.vue";
//Import CarryThaiMiddleText Component
import CarryThaiMiddleText from "./components/CarryThaiMiddleText.vue";
//Import SendMiddleText Component
import SendMiddleText from "./components/SendMiddleText.vue";
//Import SendAusMiddleText Component
import SendAusMiddleText from "./components/SendAusMiddleText.vue";
//Import SendThaiMiddleText Component
import SendThaiMiddleText from "./components/SendThaiMiddleText.vue";

export default {
  name: "app",
  data: function() {
    return {
      home: true,
      homeContent: true,

      carry: false,
      carryContent: false,

      send: false,
      sendContent: false,

      carryAus: false,
      carryAusContent: false,

      carryThai: false,
      carryThaiContent: false,

      sendAus: false,
      sendAusContent: false,

      sendThai: false,
      sendThaiContent: false,

      location: false,
      state: null,

      states: [
        {
          name: "New South Wales"
        },
        {
          name: "Western Australia"
        },
        {
          name: "Queensland"
        },
        {
          name: "South Australia"
        },
        {
          name: "Victoria"
        },
        {
          name: "Tasmania"
        }
      ]
    };
  },
  components: {
    FontAwesomeIcon,
    HomeMiddleText,
    CarryMiddleText,
    CarryAusMiddleText,
    CarryThaiMiddleText,
    SendMiddleText,
    SendAusMiddleText,
    SendThaiMiddleText
  },
  computed: {},
  methods: {
    homeState: function() {
      return this.home ? "d-flex" : "d-none";
    },
    homeContentState: function() {
      return this.homeContent ? "d-flex" : "d-none";
    },

    carryState: function() {
      return this.carry ? "d-flex" : "d-none";
    },
    carryContentState: function() {
      return this.carryContent ? "d-flex" : "d-none";
    },

    sendState: function() {
      return this.send ? "d-flex" : "d-none";
    },
    sendContentState: function() {
      return this.sendContent ? "d-flex" : "d-none";
    },

    carryAusState: function() {
      return this.carryAus ? "d-flex" : "d-none";
    },
    carryAusContentState: function() {
      return this.carryAusContent ? "d-flex" : "d-none";
    },

    carryThaiState: function() {
      return this.carryThai ? "d-flex" : "d-none";
    },
    carryThaiContentState: function() {
      return this.carryThaiContent ? "d-flex" : "d-none";
    },

    sendAusState: function() {
      return this.sendAus ? "d-flex" : "d-none";
    },
    sendAusContentState: function() {
      return this.sendAusContent ? "d-flex" : "d-none";
    },

    sendThaiState: function() {
      return this.sendThai ? "d-flex" : "d-none";
    },
    sendThaiContentState: function() {
      return this.sendThaiContent ? "d-flex" : "d-none";
    },

    showButton: function(e) {
      var state = document.getElementById("carryAusState").value;
      var from = document.getElementById("carryAusFrom").value;
      var to = document.getElementById("carryAusTo").value;
      if (state == "" || from == "" || to == "") {
        this.location = false;
      } else {
        this.location = true;
      }
    }
  }
};
</script>

<style>
</style>
