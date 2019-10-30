<template>
  <div>
    <hr class="bg-light mb-5 w-50" />
    <div class="row justify-content-sm-center">
      <h3 class="content-text text-orange mt-5">Thank you</h3>
    </div>
    <div class="row justify-content-sm-center">
      <h3 class="content-text text-orange mb-5">Your post will show up after review</h3>
    </div>

    <div class="row justify-content-sm-center">
      <router-link href="#" to="/home">
        <button type="button" class="btn btn-orange px-5 py-2 mt-5">Go to Home page</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "thank-you"
};
</script>

<style>
</style>