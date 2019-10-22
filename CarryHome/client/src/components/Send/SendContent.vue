<template>
  <div v-if="sendContent">
    <div class="row" :class="sendContentState">
      <div class="col-sm-6 mt-5">
        <div class="row justify-content-md-center">
          <a href="#" @click="$emit('sendToSendAus',(send,sendContent,sendAus,sendAusContent))">
            <h1 class="button-text text-orange">Australia</h1>
          </a>
        </div>
        <div class="row justify-content-md-center">
          <h6 class="plain-text-25 text-white">To Thailand</h6>
        </div>
      </div>
      <div class="col-sm-6 mt-5">
        <div class="row justify-content-md-center">
          <a href="#" @click="$emit('sendToSendThai',(send,sendContent,sendThai,sendThaiContent))">
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
  name: "send-content",
  props: [
    "send",
    "sendContent",
    "sendContentState",
    "sendAus",
    "sendAusContent",
    "sendThai",
    "sendThaiContent"
  ]
};
</script>

<style>
</style>