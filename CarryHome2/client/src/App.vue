<template>
  <div id="app">
    <div class="filter position-fixed w-100 h-100"></div>
    <div class="container-fluid">
      <div>
        <top
          :loginText="loginText"
          :loginTextState="loginTextState"
          :loginSection="loginSection"
          :loginSectionState="loginSectionState"
          :dropdownBox="dropdownBox"
          :dropdownBoxState="dropdownBoxState"
          :userAccount="userAccount"
          :userAccountState="userAccountState"
          @showLogin="showLogin"
          @showDropdown="showDropdown"
          @hideUser="hideUser"
        ></top>
        <div class="container">
          <router-view
            :states="states"
            :$event="$event"
            :carryAusThaiNext="carryAusThaiNext"
            @carryAusThaiButton="carryAusThaiButton"
          ></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "./components/Top.vue";
import CarryAus from "./components/Carry/CarryAus.vue";

export default {
  name: "app",
  components: {
    Top,
    CarryAus
  },
  data: function() {
    return {
      location: false,
      state: null,

      loginText: true,
      loginSection: false,
      dropdownBox: false,
      userAccount: false,

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
    loginSectionState: function() {
      return this.loginSection ? "d-flex" : "d-none";
    },
    loginTextState: function() {
      return this.loginText ? "d-flex" : "d-none";
    },
    dropdownBoxState: function() {
      return this.dropdownBox ? "d-flex" : "d-none";
    },
    userAccountState: function() {
      return this.userAccount ? "d-flex" : "d-none";
    },
    showLogin: function() {
      return (
        (this.loginText = !this.loginText),
        (this.loginSection = !this.loginSection)
      );
    },
    showDropdown: function() {
      return (this.dropdownBox = !this.dropdownBox);
    },
    hideUser: function() {
      return (
        (this.userAccount = !this.userAccount),
        (this.dropdownBox = !this.dropdownBox)
      );
    },

    carryAusThaiButton: function(e) {
      var fromState = document.getElementById("carryAusState").value;
      console.log(fromState);
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
