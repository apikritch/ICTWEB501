<template>
  <div>
    <!--Login Button-->
    <div class="row justify-content-end pt-3 mr-3">
      <div class="position-absolute">
        <div class="row justify-content-sm-end mb-3">
          <p class="plain-text-25 text-white">Log In</p>
        </div>
        <div v-if="lkbvd">
          <div class="row justify-content-sm-end mb-3">
            <font-awesome-icon icon="user-circle" class="text-white user-img-login"></font-awesome-icon>
          </div>
        </div>
        <div v-if="lkbvd">
          <div class="row justify-content-sm-end mb-3">
            <div class="card popup-background">
              <div class="card-body">
                <p class="text-center text-white">Apikritch Rattanapisankul</p>
                <p class="text-center">apikritch.r@gmail.com</p>
                <hr class="bg-light" />
                <p>Your Profile</p>
                <p>Your Post</p>
                <p>Your Help</p>
                <p>Your Setting</p>
                <hr class="bg-light" />
                <p class="text-center">Log Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Login Button-->

    <div class="container">
      <div class="position-relative">
        <div class="row justify-content-sm-center">
          <router-link href="#" to="/">
            <h1 class="logo-font text-white mt-3 mb-5">CH</h1>
          </router-link>
        </div>

        <!--Login Section-->
        <div v-if="click">
          <div class="position-absolute w-100">
            <div class="mx-5 px-5">
              <div class="card popup-background">
                <div class="card-body">
                  <button type="button" class="close close-outline" aria-label="Close">
                    <span aria-hidden="true" class="close-outline">&times;</span>
                  </button>

                  <div class="row">
                    <div class="col-sm-6 text-center content-text text-white">Log In</div>
                    <div class="col-sm-6 text-center content-text text-white">Sign Up</div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 border-right border-white">
                      <div class="container">
                        <div class="justify-content-sm-start align-items-end mb-3">
                          <label for="login-email" class="d-block">
                            <h6>Email Address</h6>
                          </label>
                          <input type="email" class="form-control" id="login-email" />
                        </div>
                        <div class="justify-content-sm-start align-items-end mb-3">
                          <label for="login-password" class="d-block">
                            <h6>Password</h6>
                          </label>
                          <input type="email" class="form-control" id="login-password" />
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
                    </div>
                    <div class="col-sm-6">
                      <div class="container">
                        <div class="row justify-content-sm-start align-items-end mb-3">
                          <div class="col-sm-6">
                            <label for="sign-up-firstname" class="d-block">
                              <h6>First Name</h6>
                            </label>
                            <input type="text" class="form-control" id="sign-up-firstname" />
                          </div>
                          <div class="col-sm-6">
                            <label for="sign-up-lastname" class="d-block">
                              <h6>Last Name</h6>
                            </label>
                            <input type="text" class="form-control" id="sign-up-lastname" />
                          </div>
                        </div>

                        <div class="justify-content-sm-start align-items-end mb-3">
                          <label for="login-email" class="d-block">
                            <h6>Email Address</h6>
                          </label>
                          <input type="email" class="form-control" id="login-email" />
                        </div>

                        <div class="justify-content-sm-start align-items-end mb-3">
                          <label for="login-password" class="d-block">
                            <h6>Password</h6>
                          </label>
                          <input type="email" class="form-control" id="login-password" />
                        </div>

                        <div class="justify-content-sm-start align-items-end mb-3">
                          <label for="login-confirm-password" class="d-block">
                            <h6>Confirm Password</h6>
                          </label>
                          <input type="email" class="form-control" id="login-confirm-password" />
                        </div>

                        <button type="button" class="btn btn-dark py-2 w-100">Sign Up</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Login Section-->
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "top",
  components: {
    FontAwesomeIcon
  }
};
</script>

<style>
</style>