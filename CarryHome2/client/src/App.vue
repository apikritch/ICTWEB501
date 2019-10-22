<template>
  <div id="app">
    <div class="filter position-absolute pb-5">
      <div class="container-fluid">
        <top></top>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "./components/Top.vue";
export default {
  name: "app",
  components: {
    Top
  },
  data: function() {
    return {
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
