<template>
  <!--Login Section-->
  <div class="row justify-content-sm-center">
    <div class="w-50">
      <div class="card popup-background">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-12 text-center content-text text-white">Sign Up</div>
          </div>
          <div class="row">
            <!--Sign up-->
            <form class="col-sm-12">
              <div class="container">
                <div class="row justify-content-sm-start align-items-end mb-3">
                  <div class="col-sm-6">
                    <label for="fname" class="d-block">
                      <h6>First Name</h6>
                    </label>
                    <input type="text" class="form-control" id="fname" name="fname" v-model="fname" />
                  </div>
                  <div class="col-sm-6">
                    <label for="lname" class="d-block">
                      <h6>Last Name</h6>
                    </label>
                    <input type="text" class="form-control" id="lname" name="lname" v-model="lname" />
                  </div>
                </div>

                <div class="justify-content-sm-start align-items-end mb-3">
                  <label for="email" class="d-block">
                    <h6>Email Address</h6>
                  </label>
                  <input type="email" class="form-control" id="email" name="email" v-model="email" />
                </div>

                <div class="justify-content-sm-start align-items-end mb-3">
                  <label for="password" class="d-block">
                    <h6>Password</h6>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    v-model="password"
                    autocomplete="off"
                  />
                </div>

                <div class="justify-content-sm-start align-items-end mb-3">
                  <label for="password2" class="d-block">
                    <h6>Confirm Password</h6>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password2"
                    name="password2"
                    v-model="password2"
                    autocomplete="off"
                  />
                </div>
                <div>
                  <div v-html="error" class="bg-danger text-white text-center mb-2 rounded"></div>
                </div>
                <button class="btn btn-dark py-2 w-100" @click="signup">Sign Up</button>
              </div>
            </form>
            <!--Sign up-->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Login Section-->
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Signup",
  data() {
    return {
      fname: null,
      lname: null,
      email: null,
      password: null,
      password2: null,
      error: null
    };
  },
  methods: {
    async signup() {
      try {
        await AuthenticationService.signup({
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          password: this.password,
          password2: this.password2
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style>
</style>