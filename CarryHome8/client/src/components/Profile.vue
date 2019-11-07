<template>
  <div v-if="$store.state.isUserLoggedIn">
    <div class="mx-5 px-5">
      <div class="row justify-content-sm-start">
        <h3 class="content-text text-orange ml-3">Profile</h3>
      </div>

      <hr class="bg-light mb-5" />

      <!--User Image-->
      <div class="row justify-content-sm-center mb-5">
        <font-awesome-icon icon="user-circle" class="user-img-detail text-white"></font-awesome-icon>
      </div>
      <!--User Image-->

      <!--Information-->
      <div class="container mb-5">
        <div class="row justify-content-sm-center">
          <div class="col-sm-6 border-right border-secondary">
            <div class="container">
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Email:</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white">{{user.email}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Password:</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white">**********</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Name:</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white">{{user.fname}} {{user.lname}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Phone (AU):</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white"></p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Phone (TH):</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white"></p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Social Media:</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="container">
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Address in Australia:</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white"></p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Address in Thailand:</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Information-->
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "profile",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      user: ""
    };
  },
  async mounted() {
    this.user = this.$store.state.user;
  }
};
</script>

<style>
</style>