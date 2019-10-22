<template>
  <div>
    <div class="row justify-content-md-center">
      <h3 class="content-text text-orange mt-5 mb-5">
        Send
        <span class="text-white">></span> From?
      </h3>
    </div>
    <hr class="bg-light mb-3 w-50" />
    <div class="row">
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
  name: "send"
};
</script>

<style>
</style>