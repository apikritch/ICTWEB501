<template>
  <div v-if="sendThai">
    <div class="row justify-content-md-center" :class="sendThaiState">
      <h3 class="content-text text-orange mt-5 mb-5">
        Send
        <span class="text-white">></span> Thailand
        <span class="text-white">></span> Where to?
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "send-thai-middle-text",
  props: ["sendThai", "sendThaiState"]
};
</script>

<style>
</style>