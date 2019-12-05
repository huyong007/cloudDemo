<template>
  <div>
    username
    <div v-if="state==='loading'">loading user...</div>
    <div>
      <h1>User:{{user.name}}</h1>etc...
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data: () => ({
    state: "loading",
    userInfo: null
  }),
  mounted() {
    this.init();
  },
  beforeRouteUpdate(to, from, next) {
    this.state = "loading";
    this.init();
    next();
  },
  methods: {
    init() {
      setTimeout(() => {
        this.userInfo = { user: "hanmeimei" };
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>