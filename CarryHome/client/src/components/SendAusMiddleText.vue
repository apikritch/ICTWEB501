<template>
  <div v-if="sendAus">
    <div class="row justify-content-md-center" :class="sendAusState">
      <h3 class="content-text text-orange mt-5 mb-5">
        Send
        <span class="text-white">></span> Australia
        <span class="text-white">></span> Where to?
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "send-aus-middle-text",
  props: ["sendAus", "sendAusState"]
};
</script>

<style>
</style>