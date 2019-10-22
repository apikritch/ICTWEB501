<template>
  <div v-if="sendThaiContent">
    <div class="row" :class="sendThaiContentState">
      <div class="col mt-3">
        <div class="row justify-content-md-center mb-3">
          <div>
            <label for="sendThaiFrom" class="text-orange d-block">From</label>
            <select
              id="sendThaiFrom"
              type="text"
              class="form-control block"
              @change="$emit('sendThaiAusButton',$event)"
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
        <div class="row mb-5">
          <div class="col-sm-6">
            <div class="row justify-content-md-end mr-1">
              <div>
                <label for="sendThaiState" class="text-orange d-block">To State</label>
                <select
                  id="sendThaiState"
                  type="text"
                  class="form-control block"
                  @change="$emit('sendThaiAusButton',$event)"
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
                <label for="sendThaiCity" class="text-orange d-block">City</label>
                <select
                  id="sendThaiCity"
                  type="text"
                  class="form-control block"
                  @change="$emit('sendThaiAusButton',$event)"
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

        <div class="row justify-content-md-center">
          <button type="button" class="btn btn-orange px-5 py-2" v-if="sendThaiAusNext">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "send-thai-content",
  props: [
    "states",
    "sendThaiContent",
    "sendThaiContentState",
    "location",
    "$event",
    "sendThaiAusNext"
  ]
};
</script>

<style>
</style>