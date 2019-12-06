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
    this.arrayToHtmlList(["item 1", "item 2"], "myListID");
  },
  methods: {
    arrayToHtmlList(arr, listID) {
      (el => (
        (el = document.querySelector("#" + listID)),
        (el.innerHtml += arr.map(item => `<li>${item}</li>`).join(""))
      ))();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>