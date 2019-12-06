<template>
  <div>
    <h1>this is a page home</h1>
    <router-link :to="{path:'/user/123'}">Go User123</router-link>
    <div id="myListID"></div>
  </div>
</template>

<script>
export default {
  filters: {},
  data() {
    return {};
  },
  created() {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>