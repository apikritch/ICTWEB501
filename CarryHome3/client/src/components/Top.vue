<template>
  <div>
    <!--Login Button-->
    <div class="row justify-content-end pt-3 mr-3">
      <div class="position-absolute">
        <div v-if="loginText">
          <div class="row justify-content-sm-end" :class="loginTextState">
            <a href="#" class="login-section" @click="$emit('showLogin',(loginText, loginSection))">
              <p class="plain-text-25 text-white">Log In</p>
            </a>
          </div>
        </div>
        <!--Login Button-->

        <!--Login Image-->
        <div v-if="userAccount">
          <div class="row justify-content-sm-end mb-3" :class="userAccountState">
            <a href="#" class="login-section" @click="$emit('showDropdown',dropdownBox)">
              <font-awesome-icon icon="user-circle" class="text-white user-img-login login-section"></font-awesome-icon>
            </a>
          </div>
        </div>
        <!--Login Image-->

        <!--Login Dropdown-->
        <div v-if="dropdownBox">
          <div class="row justify-content-sm-end login-section" :class="dropdownBoxState">
            <div class="card popup-background login-section">
              <div class="card-body">
                <p class="text-center text-white">Apikritch Rattanapisankul</p>
                <p class="text-center">apikritch.r@gmail.com</p>
                <hr class="bg-light" />
                <router-link href="#" to="/profile" class="text-link-dark">
                  <p>Your Profile</p>
                </router-link>
                <p>Your Post</p>
                <p>Your Help</p>
                <p>Your Setting</p>
                <hr class="bg-light" />
                <a
                  href="#"
                  class="text-link-dark"
                  @click="$emit('hideUser',(userAccount,dropdownBox))"
                >
                  <p class="text-center">Log Out</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Login Dropdown-->

    <div class="container">
      <div class="position-relative">
        <div class="row justify-content-sm-center">
          <router-link href="#" to="/">
            <h1 class="logo-font text-white mt-3 mb-5">CH</h1>
          </router-link>
        </div>

        <!--Login Section-->
        <div v-if="loginSection">
          <div class="position-absolute w-100" :class="loginSectionState">
            <div class="mx-5 px-5">
              <div class="card popup-background">
                <div class="card-body">
                  <button
                    type="button"
                    class="close close-outline login-section"
                    aria-label="Close"
                    @click="$emit('showLogin',(loginText, loginSection))"
                  >
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
  props: [
    "loginText",
    "loginTextState",
    "loginSection",
    "loginSectionState",
    "dropdownBox",
    "dropdownBoxState",
    "userAccount",
    "userAccountState"
  ],
  components: {
    FontAwesomeIcon
  }
};
</script>

<style>
</style>