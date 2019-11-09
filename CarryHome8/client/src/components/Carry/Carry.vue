<template>
  <div>
    <div v-if="$store.state.isUserLoggedIn">
      <div class="row justify-content-sm-center">
        <h3 class="content-text text-orange mt-5 mb-5">
          <router-link href="#" to="/" class="text-link">Home&nbsp;</router-link>
          <span class="text-white">></span>
          Carry
          <span class="text-white">></span>
          From?
        </h3>
      </div>
      <hr class="bg-light mb-3 w-50" />
      <div class="row">
        <div class="col-sm-6 mt-5">
          <div class="row justify-content-sm-center">
            <router-link href="#" to="/carry/australia">
              <h1 class="button-text text-link">Australia</h1>
            </router-link>
          </div>
          <div class="row justify-content-sm-center">
            <h6 class="plain-text-25 text-white">To Thailand</h6>
          </div>
        </div>
        <div class="col-sm-6 mt-5">
          <div class="row justify-content-sm-center">
            <router-link href="#" to="/carry/thailand">
              <h1 class="button-text text-link">Thailand</h1>
            </router-link>
          </div>
          <div class="row justify-content-sm-center">
            <h6 class="plain-text-25 text-white">To Australia</h6>
          </div>
        </div>
      </div>
    </div>
    <!--Login Section-->
    <div v-if="!$store.state.isUserLoggedIn" class="row justify-content-sm-center mt-5">
      <div class="w-75 mt-5">
        <div class="card popup-background">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-12 text-center content-text text-white">
                <h1 class="mt-4 mb-4">
                  <b>REQUIRE</b>
                </h1>

                <h1 class="mt-4 mb-4">LOGIN TO ACCESS THIS PAGE</h1>
              </div>
            </div>
            <hr class="bg-light mb-3 w-50" />
            <div class="row justify-content-sm-center mb-4">
              <router-link href="#" to="/login">
                <button type="button" class="btn btn-dark px-5 py-2 mt-4">Login</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Login Section-->
  </div>
</template>

<script>
export default {
  name: "carry"
};
</script>

<style>
</style>