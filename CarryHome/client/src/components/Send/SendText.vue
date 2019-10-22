<template>
  <div v-if="send">
    <div class="row justify-content-md-center" :class="sendState">
      <h3 class="content-text text-orange mt-5 mb-5">
        Send
        <span class="text-white">></span> From?
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "send-text",
  props: ["send", "sendState"]
};
</script>

<style>
</style>