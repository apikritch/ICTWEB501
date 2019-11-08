<template>
  <div>
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
          <div class="container">
            <div class="row mb-2">
              <div class="col-sm-5 text-right information-left pr-3">
                <p class="text-orange">
                  <b>Phone (AU):</b>
                </p>
              </div>
              <div class="col-sm-7 text-left information-right">
                <input type="text" class="form-control block w-50" v-model="userinfo.phoneau" />
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-sm-5 text-right information-left pr-3">
                <p class="text-orange">
                  <b>Phone (TH):</b>
                </p>
              </div>
              <div class="col-sm-7 text-left information-right">
                <input type="text" class="form-control block w-50" v-model="userinfo.phoneth" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5 text-right information-left pr-3">
                <p class="text-orange">
                  <b>Social Media:</b>
                </p>
              </div>
              <div class="col-sm-7 text-left information-right">
                <input type="text" class="form-control block w-50" v-model="userinfo.social" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Information-->
      <div class="row justify-content-center">
        <button @click="create" class="btn btn-orange px-5 py-2">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import UserInfoService from "@/services/UserInfoService";

export default {
  name: "createprofile",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      userinfo: {
        phoneau: "",
        phoneth: "",
        social: ""
      }
    };
  },
  methods: {
    async create() {
      // Posts data
      try {
        await UserInfoService.postUserInfoById(
          this.$store.state.user.id,
          this.userinfo
        );
        this.$router.push({
          name: "profile"
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  async mounted() {
    this.userInfo = this.$store.state.userInfo;
  }
};
</script>

<style>
</style>