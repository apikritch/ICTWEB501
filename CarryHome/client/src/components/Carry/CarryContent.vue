<template>
  <div v-if="carryContent">
    <div class="row" :class="carryContentState">
      <div class="col-sm-6 mt-5">
        <div class="row justify-content-md-center">
          <a
            href="#"
            @click="$emit('carryToCarryAus',(carry,carryContent,carryAus,carryAusContent))"
          >
            <h1 class="button-text text-orange">Australia</h1>
          </a>
        </div>
        <div class="row justify-content-md-center">
          <h6 class="plain-text-25 text-white">To Thailand</h6>
        </div>
      </div>
      <div class="col-sm-6 mt-5">
        <div class="row justify-content-md-center">
          <a
            href="#"
            @click="$emit('carryToCarryThai',(carry,carryContent,carryThai,carryThaiContent))"
          >
            <h1 class="button-text text-orange">Thailand</h1>
          </a>
        </div>
        <div class="row justify-content-md-center">
          <h6 class="plain-text-25 text-white">To Australia</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carry-content",
  props: [
    "carry",
    "carryContent",
    "carryContentState",
    "carryAus",
    "carryAusContent",
    "carryThai",
    "carryThaiContent"
  ]
};
</script>

<style>
</style>