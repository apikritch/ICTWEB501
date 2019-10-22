<template>
  <div v-if="carryAus">
    <div class="row justify-content-md-center" :class="carryAusState">
      <h3 class="content-text text-orange mt-5 mb-5">
        Carry
        <span class="text-white">></span> Australia
        <span class="text-white">></span> Choose Your Location
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "carry-aus-text",
  props: ["carryAus", "carryAusState"]
};
</script>

<style>
</style>