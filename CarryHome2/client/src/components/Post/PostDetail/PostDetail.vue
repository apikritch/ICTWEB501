<template>
  <div>
    <div class="mx-5 px-5">
      <div class="row justify-content-sm-start">
        <h3 class="content-text text-orange ml-3">
          <router-link href="#" to="/post" class="text-link">Send&nbsp;</router-link>
          <span class="text-white">></span> Detail
        </h3>
      </div>

      <hr class="bg-light mb-5" />

      <!--Post Information-->
      <div class="row justify-content-sm-center mb-3">
        <div class="col-sm-12">
          <div class="w-100">
            <div class="card">
              <div class="card-body">
                <div class="container">
                  <!--User Image-->
                  <div class="row justify-content-sm-center">
                    <font-awesome-icon icon="user-circle" class="user-img-detail"></font-awesome-icon>
                  </div>
                  <!--User Image-->

                  <hr class="bg-dark mb-5" />

                  <!--Information-->
                  <div class="container mb-5">
                    <div class="row justify-content-sm-center">
                      <div class="col-sm-6 border-right border-secondary">
                        <div class="container">
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Name:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>Apikritch Rattanapisankul</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Email:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>apikritch.r@gmail.com</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Phone:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>+61 49 999 9999 (Australia)</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Social Media:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>apikritch.r</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Pickup Location:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>Southern Cross Staion, Flinders Street Station, Melbourne Central</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="container">
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Depart:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>Sun, 27 October 2019</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>To:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>Bangkok</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Phone:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>+66 49 999 9999 (Thailand)</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Postage Option:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>Local Pickup, MRT Station, BTS Station, Thailand Post</h6>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-5 text-right information-left">
                              <h6 class="text-orange">
                                <b>Postage Fee:</b>
                              </h6>
                            </div>
                            <div class="col-sm-7 text-left information-right">
                              <h6>Not Include</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-orange">
                    <b>Description:</b>
                  </h6>
                  <div class="row justify-content-sm-start mb-3">
                    <div class="container">
                      <div class="col-sm-12">
                        <div class="w-100">
                          <div class="card border-orange">
                            <div class="card-body description">fb</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row justify-content-sm-center">
                    <div class="text-center">
                      <h4>
                        12
                        <span class="text-orange">$/Kg</span>
                      </h4>
                    </div>
                  </div>
                  <!--Information-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Post Information-->
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "post",
  components: {
    FontAwesomeIcon
  }
};
</script>

<style>
</style>