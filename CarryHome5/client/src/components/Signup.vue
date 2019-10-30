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
                    <label for="sign-up-firstname" class="d-block">
                      <h6>First Name</h6>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="sign-up-firstname"
                      v-model="signupFirstName"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label for="sign-up-lastname" class="d-block">
                      <h6>Last Name</h6>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="sign-up-lastname"
                      v-model="signupLastName"
                    />
                  </div>
                </div>

                <div class="justify-content-sm-start align-items-end mb-3">
                  <label for="signup-email" class="d-block">
                    <h6>Email Address</h6>
                  </label>
                  <input type="email" class="form-control" id="signup-email" v-model="signupEmail" />
                </div>

                <div class="justify-content-sm-start align-items-end mb-3">
                  <label for="signup-password" class="d-block">
                    <h6>Password</h6>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="signup-password"
                    v-model="signupPassword"
                    autocomplete="off"
                  />
                </div>

                <div class="justify-content-sm-start align-items-end mb-3">
                  <label for="login-confirm-password" class="d-block">
                    <h6>Confirm Password</h6>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="login-confirm-password"
                    v-model="signupConfirmPassword"
                    autocomplete="off"
                  />
                </div>

                <button type="button" class="btn btn-dark py-2 w-100">Sign Up</button>
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
export default {
  name: "signup",
  data() {
    return {
      signupFirstName: "",
      signupLastName: "",
      signupEmail: "",
      signupPassword: "",
      signupConfirmPassword: ""
    };
  }
};
</script>

<style>
</style>