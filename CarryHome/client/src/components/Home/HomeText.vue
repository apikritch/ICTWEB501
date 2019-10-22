<template>
  <div v-if="home">
    <div class="row justify-content-md-center" :class="homeState">
      <h3
        class="content-text text-orange mt-5 mb-5"
      >let other people take your things back to the country</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-text",
  props: ["home", "homeState"]
};
</script>

<style>
</style>