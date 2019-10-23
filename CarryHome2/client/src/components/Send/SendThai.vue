<template>
  <div>
    <div class="row justify-content-sm-center">
      <h3 class="content-text text-orange mt-5 mb-5">
        <router-link href="#" to="/" class="text-link">Send&nbsp;</router-link>
        <span class="text-white">></span>
        <router-link href="#" to="/send" class="text-link">&nbsp;Thailand&nbsp;</router-link>
        <span class="text-white">></span> Where to?
      </h3>
    </div>
    <hr class="bg-light mb-3 w-50" />
    <div class="row">
      <div class="col mt-3">
        <div class="row justify-content-sm-center mb-3">
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
            <div class="row justify-content-sm-end mr-1">
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
            <div class="row justify-content-sm-start ml-1">
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

        <div class="row justify-content-sm-center">
          <button type="button" class="btn btn-orange px-5 py-2" v-if="sendThaiAusNext">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "send-thai"
};
</script>

<style>
</style>