<template>
  <div>
    <b-navbar
      toggleable="md"
      type="light"
      variant="info"
      fixed="top"
      class="shadow-lg border-bottom"
    >
      <b-navbar-brand to="/">How To Handy</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/browse" class="mr-2">Browse</router-link>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <router-link
              v-if="!$store.state.isUserLoggedIn"
              to="/login"
              class="btn btn-primary mr-2"
            >Login</router-link>
            <router-link
              v-if="!$store.state.isUserLoggedIn"
              to="/register"
              class="btn btn-secondary"
            >Register</router-link>
            <b-button variant="danger" v-if="$store.state.isUserLoggedIn" @click="logout">Log out</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({ name: "root" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>