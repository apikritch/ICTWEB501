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
              <div class="row justify-content-end">
                <router-link href="#" to="/post/aus/create">
                  <button type="button" class="btn btn-orange create-but">
                    <font-awesome-icon icon="pen"></font-awesome-icon>
                  </button>
                </router-link>
              </div>
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
            </div>
          </div>
          <div class="col-sm-6">
            <div class="container">
              <div class="row justify-content-end">
                <router-link href="#" to="/profile/create">
                  <button type="button" class="btn btn-orange create-but">
                    <font-awesome-icon icon="plus"></font-awesome-icon>
                  </button>
                </router-link>
                <router-link href="#" to="/profile/edit">
                  <button type="button" class="btn btn-orange create-but">
                    <font-awesome-icon icon="pen"></font-awesome-icon>
                  </button>
                </router-link>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Phone (AU):</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white">{{userInfo.phoneau}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Phone (TH):</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white">{{userInfo.phoneth}}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-5 text-right information-left">
                  <p class="text-orange">
                    <b>Social Media:</b>
                  </p>
                </div>
                <div class="col-sm-7 text-left information-right">
                  <p class="text-white">{{userInfo.social}}</p>
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
import UserInfoService from "@/services/UserInfoService";

export default {
  name: "profile",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      user: "",
      userInfo: ""
    };
  },
  async mounted() {
    this.user = this.$store.state.user;
    this.userInfo = this.$store.state.userInfo;
  }
};
</script>

<style>
</style>