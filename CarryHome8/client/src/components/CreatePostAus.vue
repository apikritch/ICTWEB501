<template>
  <div class="mx-5 px-5" v-if="$store.state.isUserLoggedIn">
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
        <select
          id="add-from-country"
          type="text"
          class="form-control block"
          v-model="fromcountry"
          @change="changeRoute"
        >
          <option value disabled>Choose</option>
          <option v-for="country in countries" :value="country.name" :key="country.id">
            {{
            country.name
            }}
          </option>
        </select>
      </div>
      <div class="col-sm-4">
        <label for="add-from-state" class="text-orange d-block">State</label>
        <select
          id="add-from-state"
          type="text"
          class="form-control block"
          v-model="$v.post.state.$model"
        >
          <option disable value>Choose</option>
          <option v-for="state in states" :value="state.name" :key="state.id">
            {{
            state.name
            }}
          </option>
        </select>
      </div>
      <div class="col-sm-4">
        <label for="add-from-suburb" class="text-orange d-block">Suburb</label>
        <input
          type="text"
          id="add-from-suburb"
          class="form-control block"
          v-model="$v.post.suburb.$model"
        />
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
        <select id="add-to-country" type="text" class="form-control block" v-model="tocountry">
          <option disable value>Choose</option>
          <option v-for="country in countries" :value="country.name" :key="country.id">
            {{
            country.name
            }}
          </option>
        </select>
      </div>
      <div class="col-sm-4">
        <label for="add-to-province" class="text-orange d-block">Province</label>
        <select
          id="add-to-province"
          type="text"
          class="form-control block"
          v-model="$v.post.province.$model"
        >
          <option value selected>Choose</option>
          <option v-for="province in provinces" :value="province.name" :key="province.name">
            {{
            province.name
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
        <b-form-input
          required
          type="date"
          id="add-depart"
          v-model="$v.post.depart.$model"
          :state="$v.post.depart.$dirty ? !$v.post.depart.$error : null"
          aria-describedby="depart-feedback"
        />
        <b-form-invalid-feedback
          class="text-white bg-danger rounded p-1"
          id="depart-feedback"
        >This field is required.</b-form-invalid-feedback>
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

        <b-form-input
          required
          type="text"
          id="add-firstname"
          v-model="$v.post.fname.$model"
          :state="$v.post.fname.$dirty ? !$v.post.fname.$error : null"
          aria-describedby="fname-feedback"
        />

        <b-form-invalid-feedback
          class="text-white bg-danger rounded p-1"
          id="fname-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </div>

      <div class="col-sm-6">
        <label for="add-lastname" class="text-orange d-block">Last Name</label>
        <b-form-input
          required
          type="text"
          id="add-lastname"
          v-model="$v.post.lname.$model"
          :state="$v.post.lname.$dirty ? !$v.post.lname.$error : null"
          aria-describedby="lname-feedback"
        />
        <b-form-invalid-feedback
          class="text-white bg-danger rounded p-1"
          id="lname-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </div>
    </div>
    <!--Infomation Row 1-->

    <!--Infomation Row 2-->
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-4">
        <label for="add-email" class="text-orange d-block">Email</label>
        <b-form-input
          required
          type="email"
          id="add-email"
          v-model="$v.post.email.$model"
          :state="$v.post.email.$dirty ? !$v.post.email.$error : null"
          aria-describedby="email-feedback"
        />
        <b-form-invalid-feedback
          class="text-white bg-danger rounded p-1"
          id="email-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </div>
      <div class="col-sm-4">
        <label for="add-social-media-text" class="text-orange d-block">Social Media</label>
        <div class="input-group">
          <div class="input-group-prepend input-width">
            <select id="add-social-media" type="text" class="input-group-text social-drop">
              <option value selected>Line</option>
            </select>
            <input
              type="text"
              class="social-input form-control"
              id="add-social-media-text"
              placeholder="Optional"
            />
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
          <div class="input-group-prepend">
            <span class="input-group-text social-drop">TH</span>
          </div>
          <b-form-input
            required
            type="text"
            class="social-input form-control"
            id="add-aus-phone"
            v-model="$v.post.phoneth.$model"
            :state="$v.post.phoneth.$dirty ? !$v.post.phoneth.$error : null"
            aria-describedby="phoneth-feedback"
          />
          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="phoneth-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </div>
      </div>
      <div class="col-sm-4">
        <label for="add-aus-phone" class="text-orange d-block">Phone (Australia)</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text social-drop">AU</span>
          </div>
          <b-form-input
            required
            type="text"
            class="social-input form-control"
            id="add-aus-phone"
            v-model="$v.post.phoneau.$model"
            :state="$v.post.phoneau.$dirty ? !$v.post.phoneau.$error : null"
            aria-describedby="phoneau-feedback"
          />
          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="phoneau-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
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
        <b-form-input
          required
          type="text"
          id="add-aus-address1"
          v-model="$v.post.address1au.$model"
          :state="$v.post.address1au.$dirty ? !$v.post.address1au.$error : null"
          aria-describedby="address1au-feedback"
        />
        <b-form-invalid-feedback
          class="text-white bg-danger rounded p-1"
          id="address1au-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </div>
      <div class="col-sm-4">
        <label for="add-aus-address2" class="text-orange d-block">Address 2</label>
        <input type="text" class="form-control" id="add-aus-address2" placeholder="Optional" />
      </div>
      <div class="col-sm-4">
        <label for="add-aus-suburb" class="text-orange d-block">Suburb</label>
        <b-form-input
          required
          type="text"
          id="add-aus-suburb"
          v-model="$v.post.suburb.$model"
          :state="$v.post.suburb.$dirty ? !$v.post.suburb.$error : null"
          aria-describedby="suburb-feedback"
        />
        <b-form-invalid-feedback
          class="text-white bg-danger rounded p-1"
          id="suburb-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </div>
    </div>
    <!--Address In Australia 1-->

    <!--Address In Australia 2-->
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-4">
        <label for="add-aus-state" class="text-orange d-block">State</label>

        <b-form-select
          required
          id="add-aus-state"
          v-model="$v.post.state.$model"
          :state="$v.post.state.$dirty ? !$v.post.state.$error : null"
          aria-describedby="state-feedback"
        >
          <option value disabled>Choose</option>
          <option v-for="state in states" :value="state.name" :key="state.id">
            {{
            state.name
            }}
          </option>
        </b-form-select>

        <b-form-invalid-feedback
          class="text-white bg-danger rounded p-1"
          id="state-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </div>
      <div class="col-sm-4">
        <label for="add-aus-postcode" class="text-orange d-block">Postcode</label>
        <b-form-input
          required
          type="text"
          id="add-aus-postcode"
          v-model="$v.post.postcodeau.$model"
          :state="$v.post.postcodeau.$dirty ? !$v.post.postcodeau.$error : null"
          aria-describedby="postcodeau-feedback"
        />
        <b-form-invalid-feedback
          class="text-white bg-danger rounded p-1"
          id="postcodeau-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
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
        <b-form-input
          required
          type="text"
          id="add-thai-address"
          v-model="$v.post.addressth.$model"
          :state="$v.post.addressth.$dirty ? !$v.post.addressth.$error : null"
          aria-describedby="addressth-feedback"
        />
        <b-form-invalid-feedback
          class="text-white bg-danger rounded p-1"
          id="addressth-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </div>
    </div>
    <!--Address In Thailand 1-->

    <!--Address In Thailand 2-->
    <div class="row justify-content-sm-start align-items-end mb-3">
      <div class="col-sm-4">
        <label for="add-thai-province" class="text-orange d-block">Province</label>

        <b-form-select
          required
          id="add-thai-province"
          v-model="$v.post.province.$model"
          :state="$v.post.province.$dirty ? !$v.post.province.$error : null"
          aria-describedby="province-feedback"
        >
          <option value disabled>Choose</option>
          <option v-for="province in provinces" :value="province.name" :key="province.id">
            {{
            province.name
            }}
          </option>
        </b-form-select>

        <b-form-invalid-feedback
          class="text-white bg-danger rounded p-1"
          id="province-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </div>
      <div class="col-sm-4">
        <label for="add-thai-postcode" class="text-orange d-block">Postcode</label>
        <b-form-input
          required
          type="text"
          id="add-thai-postcode"
          v-model="$v.post.postcodeth.$model"
          :state="$v.post.postcodeth.$dirty ? !$v.post.postcodeth.$error : null"
          aria-describedby="postcodeth-feedback"
        />
        <b-form-invalid-feedback
          class="text-white bg-danger rounded p-1"
          id="postcodeth-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
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
          <div class="input-group-prepend">
            <span class="input-group-text social-drop">
              <b>$</b>
            </span>
          </div>
          <b-form-input
            required
            type="text"
            class="social-input form-control"
            id="add-price"
            v-model="$v.post.price.$model"
            :state="$v.post.price.$dirty ? !$v.post.price.$error : null"
            aria-describedby="price-feedback"
          />
          <b-form-invalid-feedback
            class="text-white bg-danger rounded p-1"
            id="price-feedback"
          >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
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
        <input type="text" class="form-control" id="add-postage" />
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
      <button @click="create" class="btn btn-orange px-5 py-2">Submit</button>
    </div>
  </div>
</template>

<script>
import CountryService from "@/services/CountryService";
import StateService from "@/services/StateService";
import ProvinceService from "@/services/ProvinceService";

import PostService from "@/services/PostService";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "CreatePostAus",
  data() {
    return {
      countries: null,
      states: null,
      provinces: null,
      post: {
        depart: "",
        fname: "",
        lname: "",
        email: "",
        social: "",
        phoneth: "",
        phoneau: "",
        address1au: "",
        address2au: "",
        suburb: "",
        state: "",
        postcodeau: "",
        addressth: "",
        province: "",
        postcodeth: "",
        pickup: "",
        price: "",
        postopt: "",
        description: ""
      },
      fromcountry: "",
      tocountry: ""
    };
  },
  created() {
    if (this.$route.params.value1) {
      this.fromcountry = this.$route.params.value1;
    }
    if (this.$route.params.value2) {
      this.post.state = this.$route.params.value2;
    }
    if (this.$route.params.value3) {
      this.post.suburb = this.$route.params.value3;
    }

    if (this.$route.params.value4) {
      this.tocountry = this.$route.params.value4;
    }
    if (this.$route.params.value5) {
      this.post.province = this.$route.params.value5;
    }
  },
  mixins: [validationMixin],
  validations: {
    post: {
      depart: {
        required
      },
      fname: {
        required,
        minLength: minLength(3)
      },
      lname: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        minLength: minLength(3)
      },
      phoneth: {
        required,
        minLength: minLength(3)
      },
      phoneau: {
        required,
        minLength: minLength(3)
      },
      address1au: {
        required,
        minLength: minLength(3)
      },
      suburb: {
        required,
        minLength: minLength(3)
      },
      state: {
        required,
        minLength: minLength(3)
      },
      postcodeau: {
        required,
        minLength: minLength(3)
      },
      addressth: {
        required,
        minLength: minLength(3)
      },
      province: {
        required,
        minLength: minLength(3)
      },
      postcodeth: {
        required,
        minLength: minLength(3)
      },
      price: {
        required,
        minLength: minLength(1)
      }
    }
  },
  methods: {
    async create() {
      // Validiaton Check
      this.$v.post.$touch();
      if (this.$v.post.$anyError) {
        return;
      }
      // Posts data
      try {
        await PostService.postPosts(this.post);
        this.$router.push({
          name: "post"
        });
      } catch (error) {
        console.log(error);
      }
    },
    changeRoute() {
      if (this.fromcountry == "Thailand") {
        this.$router.push({
          name: "createpostthai"
        });
      }
    }
  },
  async mounted() {
    this.countries = (await CountryService.getAllCountries()).data;
    this.states = (await StateService.getAllStates()).data;
    this.provinces = (await ProvinceService.getAllProvinces()).data;
  }
};
</script>


<style>
</style>