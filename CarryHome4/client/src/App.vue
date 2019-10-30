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
            :carryAusThaiNext="carryAusThaiNext"
            :carryThaiAusNext="carryThaiAusNext"
            :sendAusThaiNext="sendAusThaiNext"
            :sendThaiAusNext="sendThaiAusNext"
            @showCarryAusThaiButton="carryAusThaiButton"
            @showCarryThaiAusButton="carryThaiAusButton"
            @showSendAusThaiButton="sendAusThaiButton"
            @showSendThaiAusButton="sendThaiAusButton"
          ></router-view>
        </div>
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
  watch: {
    $route() {
      this.location = false;
    }
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
    carryAusThaiButton: function(showCarryAusThaiButton) {
      if (showCarryAusThaiButton == true) {
        this.location = true;
      } else {
        this.location = false;
      }
    },
    carryThaiAusButton: function(showCarryThaiAusButton) {
      if (showCarryThaiAusButton == true) {
        this.location = true;
      } else {
        this.location = false;
      }
    },
    sendAusThaiButton: function(showSendAusThaiButton) {
      if (showSendAusThaiButton == true) {
        this.location = true;
      } else {
        this.location = false;
      }
    },
    sendThaiAusButton: function(showSendThaiAusButton) {
      if (showSendThaiAusButton == true) {
        this.location = true;
      } else {
        this.location = false;
      }
    }
  }
};
</script>

<style>
</style>
