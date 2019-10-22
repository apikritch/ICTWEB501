<template>
  <div>
    <div class="row justify-content-md-center">
      <h3 class="content-text text-orange mt-5 mb-5">
        Send
        <span class="text-white">></span> Australia
        <span class="text-white">></span> Where to?
      </h3>
    </div>
    <hr class="bg-light mb-3 w-50" />
    <div class="row">
      <div class="col mt-3">
        <div class="row mb-3">
          <div class="col-sm-6">
            <div class="row justify-content-md-end mr-1">
              <div>
                <label for="sendAusState" class="text-orange d-block">From State</label>
                <select
                  id="sendAusState"
                  type="text"
                  class="form-control block"
                  @change="$emit('sendAusThaiButton',$event)"
                >
                  <option value selected>Choose</option>
                  <option v-for="state in states" :value="state.name" :key="state.name">
                    {{
                    state.name
                    }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="row justify-content-md-start ml-1">
              <div>
                <label for="sendAusCity" class="text-orange d-block">City</label>
                <select
                  id="sendAusCity"
                  type="text"
                  class="form-control block"
                  @change="$emit('sendAusThaiButton',$event)"
                >
                  <option value selected>Choose</option>
                  <option v-for="state in states" :value="state.name" :key="state.name">
                    {{
                    state.name
                    }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-md-center mb-5">
          <div>
            <label for="sendAusTo" class="text-orange d-block">To</label>
            <select
              id="sendAusTo"
              type="text"
              class="form-control block"
              @change="$emit('sendAusThaiButton',$event)"
            >
              <option value selected>Choose</option>
              <option v-for="state in states" :value="state.name" :key="state.name">
                {{
                state.name
                }}
              </option>
            </select>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <button type="button" class="btn btn-orange px-5 py-2" v-if="sendAusThaiNext">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "send-aus"
};
</script>

<style>
</style>