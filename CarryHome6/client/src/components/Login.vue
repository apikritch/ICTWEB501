<template>
  <!--Login Section-->
  <div class="row justify-content-sm-center">
    <div class="w-50">
      <div class="card popup-background">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-12 text-center content-text text-white">Log In</div>
          </div>
          <div class="row">
            <!--Log in-->
            <form class="col-sm-12">
              <div class="container">
                <div class="justify-content-sm-start align-items-end mb-3">
                  <label for="email" class="d-block">
                    <h6>Email Address</h6>
                  </label>
                  <input type="email" class="form-control" id="email" v-model="loginEmail" />
                </div>
                <div class="justify-content-sm-start align-items-end mb-3">
                  <label for="password" class="d-block">
                    <h6>Password</h6>
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="loginPassword"
                    autocomplete="off"
                  />
                </div>

                <div class="justify-content-sm-start align-items-end mb-3">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="postage-check" />
                    <label class="custom-control-label" for="postage-check">
                      <h6>Remember Me</h6>
                    </label>
                  </div>
                </div>

                <button type="button" class="btn btn-dark py-2 w-100 mb-3">Log In</button>

                <div class="row">
                  <div class="col-sm-12 text-right">
                    <a href="#" class="text-link-forgot">
                      <h6>Forget Password?</h6>
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <!--Log in-->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Login Section-->
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginEmail: "",
      loginPassword: ""
    };
  }
};
</script>

<style>
</style>