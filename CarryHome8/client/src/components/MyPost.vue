<template>
  <div>
    <div class="mx-5 px-5">
      <div class="row justify-content-sm-start">
        <h3 class="content-text text-orange ml-3">My Post</h3>
      </div>

      <hr class="bg-light mb-5" />

      <!--Post 1-->
      <div class="row justify-content-sm-center mb-3" v-for="post in posts" :key="post.id">
        <div class="col-sm-12">
          <div class="w-100">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-2">
                    <div class="row justify-content-sm-center">
                      <font-awesome-icon icon="user-circle" class="user-img"></font-awesome-icon>
                    </div>
                  </div>
                  <div class="col-sm-4 border-left border-secondary">
                    <h6 class="text-orange">
                      <b>Depart:</b>
                    </h6>
                    <h6>{{moment(post.depart).format('dddd, DD MMM YYYY')}}</h6>
                    <h6 class="text-orange">
                      <b>From:</b>
                    </h6>
                    <h6>{{post.suburb}}</h6>
                  </div>
                  <div class="col-sm-4 border-left border-right border-secondary">
                    <h6 class="text-orange">
                      <b>To:</b>
                    </h6>
                    <h6>{{post.province}}</h6>
                    <h6 class="text-orange">
                      <b>Postage Option:</b>
                    </h6>
                    <h6>
                      <font-awesome-icon icon="paper-plane"></font-awesome-icon>&nbsp;Thailand Post |
                      <span class="text-danger">Free</span>
                    </h6>
                  </div>
                  <div class="col-sm-2">
                    <div class="row justify-content-sm-center">
                      <div class="text-center price-per-kilo">
                        <h4>
                          {{post.price}}
                          <span class="text-orange">$/Kg</span>
                        </h4>
                        <router-link href="#" :to="'/post/' + post.id">
                          <button type="button" class="btn btn-orange">Select</button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Post 1-->
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PostService from "@/services/PostService";
import Search from "@/components/Search";

export default {
  name: "MyPost",
  components: {
    FontAwesomeIcon,
    Search
  },
  data() {
    return {
      posts: ""
    };
  },
  async mounted() {
    const userId = this.$store.state.user.id;
    this.posts = (await PostService.getMyPosts(userId)).data;
  }
};
</script>

<style>
</style>