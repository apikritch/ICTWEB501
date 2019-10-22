<template>
  <div v-if="carry">
    <div class="row justify-content-md-center" :class="carryState">
      <h3 class="content-text text-orange mt-5 mb-5">
        Carry
        <span class="text-white">></span> From?
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "carry-text",
  props: ["carry", "carryState"]
};
</script>

<style>
</style>