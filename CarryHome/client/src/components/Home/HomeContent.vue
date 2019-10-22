<template>
  <div v-if="homeContent">
    <div class="row" :class="homeContentState">
      <div class="col-sm-6 mt-5">
        <div class="row justify-content-md-center">
          <h6 class="plain-text-25 text-white">I'll</h6>
        </div>
        <div class="row justify-content-md-center">
          <a href="#" @click="$emit('homeToCarry',(home,homeContent,carry,carryContent))">
            <h1 class="button-text text-orange">Carry</h1>
          </a>
        </div>
        <div class="row justify-content-md-center">
          <h6 class="plain-text-25 text-white">Things for you</h6>
        </div>
      </div>
      <div class="col-sm-6 mt-5">
        <div class="row justify-content-md-center">
          <h6 class="plain-text-25 text-white">Wanna</h6>
        </div>
        <div class="row justify-content-md-center">
          <a href="#" @click="$emit('homeToSend',(home,homeContent,send,sendContent))">
            <h1 class="button-text text-orange">Send</h1>
          </a>
        </div>
        <div class="row justify-content-md-center">
          <h6 class="plain-text-25 text-white">Things to another Country</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-content",
  props: [
    "home",
    "homeContent",
    "homeContentState",
    "send",
    "sendContent",
    "carry",
    "carryContent"
  ]
};
</script>

<style>
</style>