<template>
  <div id="app">
    <div class="filter position-absolute pb-5">
      <router-view
        :home="home"
        :homeState="homeState"
        :homeContent="homeContent"
        :homeContentState="homeContentState"
        :carry="carry"
        :carryContent="carryContent"
        :send="send"
        :sendContent="sendContent"
        @homeToCarry="homeToCarry"
        @homeToSend="homeToSend"
      ></router-view>

      <div class="container">
        <!--Home Text-->
        <home-text :home="home" :homeState="homeState"></home-text>
        <!--Home Text-->

        <!--Carry Text-->
        <carry-text :carry="carry" :carryState="carryState"></carry-text>
        <!--Carry Text-->

        <!--Carry Aus Text-->
        <carry-aus-text :carryAus="carryAus" :carryAusState="carryAusState"></carry-aus-text>
        <!--Carry Aus Text-->

        <!--Carry Thai Text-->
        <carry-thai-text :carryThai="carryThai" :carryThaiState="carryThaiState"></carry-thai-text>
        <!--Carry Thai Text-->

        <!--Send Text-->
        <send-text :send="send" :sendState="sendState"></send-text>
        <!--Send Text-->

        <!--Send Aus Text-->
        <send-aus-text :sendAus="sendAus" :sendAusState="sendAusState"></send-aus-text>
        <!--Send Aus Text-->

        <!--Send Thai Text-->
        <send-thai-text :sendThai="sendThai" :sendThaiState="sendThaiState"></send-thai-text>
        <!--Send Thai Text-->

        <hr class="bg-light mb-3 w-50" />

        <!--Home Content-->
        <home-content
          :home="home"
          :homeContent="homeContent"
          :homeContentState="homeContentState"
          :carry="carry"
          :carryContent="carryContent"
          :send="send"
          :sendContent="sendContent"
          @homeToCarry="homeToCarry"
          @homeToSend="homeToSend"
        ></home-content>
        <!--Home Content-->

        <!--Carry Content-->
        <carry-content
          :carry="carry"
          :carryContent="carryContent"
          :carryContentState="carryContentState"
          :carryAus="carryAus"
          :carryAusContent="carryAusContent"
          :carryThai="carryThai"
          :carryThaiContent="carryThaiContent"
          @carryToCarryAus="carryToCarryAus"
          @carryToCarryThai="carryToCarryThai"
        ></carry-content>
        <!--Carry Content-->

        <!--Carry Aus Content-->
        <carry-aus-content
          :states="states"
          :carryAusContent="carryAusContent"
          :carryAusContentState="carryAusContentState"
          :location="location"
          $event="$event"
          :carryAusThaiNext="carryAusThaiNext"
          @carryAusThaiButton="carryAusThaiButton"
        ></carry-aus-content>
        <!--Carry Aus Content-->

        <!--Carry Thai Content-->
        <carry-thai-content
          :states="states"
          :carryThaiContent="carryThaiContent"
          :carryThaiContentState="carryThaiContentState"
          :location="location"
          $event="$event"
          :carryThaiAusNext="carryThaiAusNext"
          @carryThaiAusButton="carryThaiAusButton"
        ></carry-thai-content>
        <!--Carry Thai Content-->

        <!--Send Content-->
        <send-content
          :send="send"
          :sendContent="sendContent"
          :sendContentState="sendContentState"
          :sendAus="sendAus"
          :sendAusContent="sendAusContent"
          :sendThai="sendThai"
          :sendThaiContent="sendThaiContent"
          @sendToSendAus="sendToSendAus"
          @sendToSendThai="sendToSendThai"
        ></send-content>
        <!--Send Content-->

        <!--Send Aus Content-->
        <send-aus-content
          :states="states"
          :sendAusContent="sendAusContent"
          :sendAusContentState="sendAusContentState"
          :location="location"
          $event="$event"
          :sendAusThaiNext="sendAusThaiNext"
          @sendAusThaiButton="sendAusThaiButton"
        ></send-aus-content>
        <!--Send Aus Content-->

        <!--Send Thai Content-->
        <send-thai-content
          :states="states"
          :sendThaiContent="sendThaiContent"
          :sendThaiContentState="sendThaiContentState"
          :location="location"
          $event="$event"
          :sendThaiAusNext="sendThaiAusNext"
          @sendThaiAusButton="sendThaiAusButton"
        ></send-thai-content>
        <!--Send Thai Content-->
      </div>
    </div>
  </div>
</template>

<script>
//Import Fontawesome Component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//Import Top Component
import Top from "./components/Top.vue";

//Import HomeText Component
import HomeText from "./components/Home/HomeText.vue";
//Import HomeContent Component
import HomeContent from "./components/Home/HomeContent.vue";

//Import CarryText Component
import CarryText from "./components/Carry/CarryText.vue";
//Import CarryContent Component
import CarryContent from "./components/Carry/CarryContent.vue";

//Import CarryAusText Component
import CarryAusText from "./components/Carry/CarryAus/CarryAusText.vue";
//Import CarryAusContent Component
import CarryAusContent from "./components/Carry/CarryAus/CarryAusContent.vue";

//Import CarryThaiText Component
import CarryThaiText from "./components/Carry/CarryThai/CarryThaiText.vue";
//Import CarryThaiContent Component
import CarryThaiContent from "./components/Carry/CarryThai/CarryThaiContent.vue";

//Import SendText Component
import SendText from "./components/Send/SendText.vue";
//Import SendContent Component
import SendContent from "./components/Send/SendContent.vue";

//Import SendAusText Component
import SendAusText from "./components/Send/SendAus/SendAusText.vue";
//Import SendAusContent Component
import SendAusContent from "./components/Send/SendAus/SendAusContent.vue";

//Import SendThaiText Component
import SendThaiText from "./components/Send/SendThai/SendThaiText.vue";
//Import SendThaiContent Component
import SendThaiContent from "./components/Send/SendThai/SendThaiContent.vue";

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
    Top,
    HomeText,
    CarryText,
    CarryAusText,
    CarryThaiText,
    SendText,
    SendAusText,
    SendThaiText,
    HomeContent,
    CarryContent,
    SendContent,
    CarryAusContent,
    CarryThaiContent,
    SendAusContent,
    SendThaiContent
  },
  computed: {
    carryAusThaiNext: function() {
      if (this.location) {
        return true;
      } else {
        return false;
      }
    },
    carryThaiAusNext: function() {
      if (this.location) {
        return true;
      } else {
        return false;
      }
    },
    sendAusThaiNext: function() {
      if (this.location) {
        return true;
      } else {
        return false;
      }
    },
    sendThaiAusNext: function() {
      if (this.location) {
        return true;
      } else {
        return false;
      }
    }
  },
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

    homeToCarry: function() {
      return (
        (this.home = !this.home),
        (this.homeContent = !this.homeContent),
        (this.carry = !this.carry),
        (this.carryContent = !this.carryContent)
      );
    },
    homeToSend: function() {
      return (
        (this.home = !this.home),
        ((this.homeContent = !this.homeContent), (this.send = !this.send)),
        (this.sendContent = !this.sendContent)
      );
    },
    carryToCarryAus: function() {
      return (
        (this.carry = !this.carry),
        (this.carryContent = !this.carryContent),
        (this.carryAus = !this.carryAus),
        (this.carryAusContent = !this.carryAusContent)
      );
    },
    carryToCarryThai: function() {
      return (
        (this.carry = !this.carry),
        (this.carryContent = !this.carryContent),
        (this.carryThai = !this.carryThai),
        (this.carryThaiContent = !this.carryThaiContent)
      );
    },
    sendToSendAus: function() {
      return (
        (this.send = !this.send),
        (this.sendContent = !this.sendContent),
        (this.sendAus = !this.sendAus),
        (this.sendAusContent = !this.sendAusContent)
      );
    },
    sendToSendThai: function() {
      return (
        (this.send = !this.send),
        (this.sendContent = !this.sendContent),
        (this.sendThai = !this.sendThai),
        (this.sendThaiContent = !this.sendThaiContent)
      );
    },
    carryAusThaiButton: function() {
      var fromState = document.getElementById("carryAusState").value;
      var fromCity = document.getElementById("carryAusCity").value;
      var toThai = document.getElementById("carryAusTo").value;
      if (fromState == "" || fromCity == "" || toThai == "") {
        this.location = false;
      } else {
        this.location = true;
      }
    },
    carryThaiAusButton: function() {
      var fromThai = document.getElementById("carryThaiFrom").value;
      var toState = document.getElementById("carryThaiState").value;
      var toCity = document.getElementById("carryThaiCity").value;
      if (fromThai == "" || toState == "" || toCity == "") {
        this.location = false;
      } else {
        this.location = true;
      }
    },
    sendAusThaiButton: function() {
      var fromState = document.getElementById("sendAusState").value;
      var fromCity = document.getElementById("sendAusCity").value;
      var toThai = document.getElementById("sendAusTo").value;
      if (fromState == "" || fromCity == "" || toThai == "") {
        this.location = false;
      } else {
        this.location = true;
      }
    },
    sendThaiAusButton: function() {
      var fromState = document.getElementById("sendThaiState").value;
      var fromCity = document.getElementById("sendThaiCity").value;
      var toThai = document.getElementById("sendThaiTo").value;
      if (fromState == "" || fromCity == "" || toThai == "") {
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
