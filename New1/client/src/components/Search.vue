<template>
  <div>
    <Panel title="Search">
      <b-form-input v-model="search" placeholder="Search Here"></b-form-input>
    </Panel>
  </div>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  name: "Search",
  components: {
    Panel
  },
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search() {
      const route = {
        name: "browse"
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