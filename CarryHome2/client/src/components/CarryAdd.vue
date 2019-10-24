<template>
  <div class="mx-5 px-5">
    <div class="row justify-content-sm-start">
      <h3 class="content-text text-orange ml-3">Carry</h3>
    </div>

    <hr class="bg-light mb-5" />

    <!--From-->
    <h4 class="text-orange">
      <u>Form</u>
    </h4>
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-4">
        <label for="add-from-country" class="text-orange d-block">Country</label>
        <select id="add-from-country" type="text" class="form-control block">
          <option value selected>Choose</option>
          <option v-for="state in states" :value="state.name" :key="state.name">
            {{
            state.name
            }}
          </option>
        </select>
      </div>
      <div class="col-sm-4">
        <label for="add-from-state" class="text-orange d-block">State</label>
        <select id="add-from-state" type="text" class="form-control block">
          <option value selected>Choose</option>
          <option v-for="state in states" :value="state.name" :key="state.name">
            {{
            state.name
            }}
          </option>
        </select>
      </div>
      <div class="col-sm-4">
        <label for="add-from-city" class="text-orange d-block">City</label>
        <select id="add-from-city" type="text" class="form-control block">
          <option value selected>Choose</option>
          <option v-for="state in states" :value="state.name" :key="state.name">
            {{
            state.name
            }}
          </option>
        </select>
      </div>
    </div>
    <!--From-->

    <!--To-->
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-4">
        <h4 class="text-orange">
          <u>To</u>
        </h4>
        <label for="add-to-country" class="text-orange d-block">Country</label>
        <select id="add-to-country" type="text" class="form-control block">
          <option value selected>Choose</option>
          <option v-for="state in states" :value="state.name" :key="state.name">
            {{
            state.name
            }}
          </option>
        </select>
      </div>
      <div class="col-sm-4">
        <label for="add-to-city" class="text-orange d-block">City</label>
        <select id="add-to-city" type="text" class="form-control block">
          <option value selected>Choose</option>
          <option v-for="state in states" :value="state.name" :key="state.name">
            {{
            state.name
            }}
          </option>
        </select>
      </div>
    </div>
    <!--To-->

    <!--Depart-->
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-4">
        <h4 class="text-orange mb-3">
          <u>Depart</u>
        </h4>
        <select id="add-depart" type="text" class="form-control block">
          <option value selected>Choose</option>
          <option v-for="state in states" :value="state.name" :key="state.name">
            {{
            state.name
            }}
          </option>
        </select>
      </div>
    </div>
    <!--Depart-->

    <hr class="bg-light mb-5" />

    <!--Infomation Row 1-->
    <h4 class="text-orange">
      <u>Information</u>
    </h4>
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-6">
        <label for="add-firstname" class="text-orange d-block">First Name</label>
        <input type="text" class="form-control" id="add-firstname" />
      </div>
      <div class="col-sm-6">
        <label for="add-lastname" class="text-orange d-block">Last Name</label>
        <input type="text" class="form-control" id="add-lastname" />
      </div>
    </div>
    <!--Infomation Row 1-->

    <!--Infomation Row 2-->
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-4">
        <label for="add-email" class="text-orange d-block">Email</label>
        <input type="email" class="form-control" id="add-email" />
      </div>
      <div class="col-sm-4">
        <label for="add-social-media-text" class="text-orange d-block">Social Media</label>
        <div class="input-group">
          <div class="input-group-prepend input-width">
            <select id="add-social-media" type="text" class="input-group-text social-drop">
              <option value selected>Line</option>
            </select>
            <input type="text" class="social-input form-control" id="add-social-media-text" />
          </div>
        </div>
      </div>
    </div>
    <!--Infomation Row 2-->

    <!--Infomation Row 3-->
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-4">
        <label for="add-thai-phone" class="text-orange d-block">Phone (Thailand)</label>
        <div class="input-group">
          <div class="input-group-prepend input-width">
            <div class="input-group-text social-drop">TH</div>
            <input type="text" class="social-input form-control" id="add-thai-phone" />
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <label for="add-aus-phone" class="text-orange d-block">Phone (Australia)</label>
        <div class="input-group">
          <div class="input-group-prepend input-width">
            <div class="input-group-text social-drop">AU</div>
            <input type="text" class="social-input form-control" id="add-aus-phone" />
          </div>
        </div>
      </div>
    </div>
    <!--Infomation Row 3-->

    <hr class="bg-light mb-5" />

    <!--Address In Australia 1-->
    <h4 class="text-orange">
      <u>Address in Australia</u>
    </h4>
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-4">
        <label for="add-aus-address1" class="text-orange d-block">Address 1</label>
        <input type="text" class="form-control" id="add-aus-address1" />
      </div>
      <div class="col-sm-4">
        <label for="add-aus-address2" class="text-orange d-block">Address 2</label>
        <input type="text" class="form-control" id="add-aus-address2" />
      </div>
      <div class="col-sm-4">
        <label for="add-aus-suburb" class="text-orange d-block">Suburb</label>
        <select id="add-aus-suburb" type="text" class="form-control block">
          <option value selected>Choose</option>
          <option v-for="state in states" :value="state.name" :key="state.name">
            {{
            state.name
            }}
          </option>
        </select>
      </div>
    </div>
    <!--Address In Australia 1-->

    <!--Address In Australia 2-->
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-4">
        <label for="add-aus-state" class="text-orange d-block">State</label>
        <select id="add-aus-state" type="text" class="form-control block">
          <option value selected>Choose</option>
          <option v-for="state in states" :value="state.name" :key="state.name">
            {{
            state.name
            }}
          </option>
        </select>
      </div>
      <div class="col-sm-4">
        <label for="add-aus-postcode" class="text-orange d-block">Postcode</label>
        <input type="text" class="form-control" id="add-aus-postcode" />
      </div>
    </div>
    <!--Address In Australia 2-->

    <hr class="bg-light mb-5" />

    <!--Address In Thailand 1-->
    <h4 class="text-orange">
      <u>Address in Thailand</u>
    </h4>
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-12">
        <label for="add-thai-address" class="text-orange d-block">Address</label>
        <input type="text" class="form-control" id="add-thai-address" />
      </div>
    </div>
    <!--Address In Thailand 1-->

    <!--Address In Thailand 2-->
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-4">
        <label for="add-thai-province" class="text-orange d-block">Province</label>
        <select id="add-thai-province" type="text" class="form-control block">
          <option value selected>Choose</option>
          <option v-for="state in states" :value="state.name" :key="state.name">
            {{
            state.name
            }}
          </option>
        </select>
      </div>
      <div class="col-sm-4">
        <label for="add-thai-postcode" class="text-orange d-block">Postcode</label>
        <input type="text" class="form-control" id="add-thai-postcode" />
      </div>
    </div>
    <!--Address In Thailand 2-->

    <hr class="bg-light mb-5" />

    <!--Pickup Location-->
    <h4 class="text-orange mb-3">
      <u>Pickup Location</u>
    </h4>
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-5">
        <input type="text" class="form-control" id="add-pickup" />
      </div>
    </div>
    <!--Pickup Location-->

    <hr class="bg-light mb-5" />

    <!--Price-->
    <h4 class="text-orange mb-3">
      <u>Price</u>
    </h4>
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-4">
        <div class="input-group">
          <div class="input-group-prepend input-width">
            <input type="text" class="price-left form-control" id="add-price" />
            <div class="input-group-text price-right">
              <b>$/Kg</b>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="postage-check" />
          <label class="custom-control-label text-orange" for="postage-check">Included Postage</label>
        </div>
      </div>
    </div>
    <!--Price-->

    <hr class="bg-light mb-5" />

    <!--Postage Option-->
    <h4 class="text-orange mb-3">
      <u>Postage Option</u>
    </h4>
    <div class="row justify-content-sm-start align-items-end mb-1">
      <div class="col-sm-4">
        <select id="add-postage" type="text" class="form-control block">
          <option value selected>Choose</option>
          <option v-for="state in states" :value="state.name" :key="state.name">
            {{
            state.name
            }}
          </option>
        </select>
      </div>
    </div>
    <div class="text-orange">
      <a href="#" class="text-link">
        <h4 class="d-inline">+</h4>
      </a>&nbsp;
      <div class="d-inline">Add Other Option</div>
    </div>
    <!--Postage Option-->

    <hr class="bg-light mb-5" />

    <!--Description-->
    <h4 class="text-orange mb-3">
      <u>Description</u>
    </h4>
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-12">
        <textarea class="form-control" id="add-description" rows="3"></textarea>
      </div>
    </div>
    <!--Description-->

    <hr class="bg-light mb-5" />

    <div class="row justify-content-sm-center">
      <router-link href="#" to="/thankyou">
        <button type="button" class="btn btn-orange px-5 py-2">Submit</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "carry-add"
};
</script>

<style>
</style>