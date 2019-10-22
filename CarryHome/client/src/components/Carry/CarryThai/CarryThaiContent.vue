<template>
  <div v-if="carryThaiContent">
    <div class="row" :class="carryThaiContentState">
      <div class="col mt-3">
        <div class="row justify-content-md-center mb-3">
          <div>
            <label for="carryThaiFrom" class="text-orange d-block">From</label>
            <select
              id="carryThaiFrom"
              type="text"
              class="form-control block"
              @change="$emit('carryThaiAusButton',$event)"
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
                <label for="carryThaiState" class="text-orange d-block">To State</label>
                <select
                  id="carryThaiState"
                  type="text"
                  class="form-control block"
                  @change="$emit('carryThaiAusButton',$event)"
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
                <label for="carryThaiCity" class="text-orange d-block">City</label>
                <select
                  id="carryThaiCity"
                  type="text"
                  class="form-control block"
                  @change="$emit('carryThaiAusButton',$event)"
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
          <button type="button" class="btn btn-orange px-5 py-2" v-if="carryThaiAusNext">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carry-thai-content",
  props: [
    "states",
    "carryThaiContent",
    "carryThaiContentState",
    "location",
    "$event",
    "carryThaiAusNext"
  ]
};
</script>

<style>
</style>