<template>
  <!--Login Section-->
  <div class="row justify-content-sm-center">
    <div class="w-75">
      <div class="card popup-background">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-12 text-center content-text text-white">
              <h1 class="mt-4 mb-4">Thank You</h1>

              <h1 class="mt-4 mb-4">For Registering On Our Website</h1>
            </div>
          </div>
          <hr class="bg-light mb-3 w-50" />
          <div class="row justify-content-sm-center mb-4">
            <router-link href="#" to="/">
              <button type="button" class="btn btn-dark px-5 py-2 mt-4">Go to Home page</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Login Section-->
</template>

<script>
export default {
  name: "thank-you-signup"
};
</script>

<style>
</style>