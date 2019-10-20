<template>
  <div v-if="carryThai">
    <div class="row justify-content-md-center" :class="carryThaiState">
      <h3 class="content-text text-orange mt-5 mb-5">
        Carry
        <span class="text-white">></span> Thailand
        <span class="text-white">></span> Choose Your Location
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "carry-thai-middle-text",
  props: ["carryThai", "carryThaiState"]
};
</script>

<style>
</style>