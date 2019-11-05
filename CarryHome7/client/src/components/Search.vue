<template>
  <div>
    <b-form-input v-model="search" placeholder="Search Here"></b-form-input>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search(value) {
      const route = {
        name: "post"
      };
      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }
      this.$router.push(route);
    },
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>

<style>
</style>