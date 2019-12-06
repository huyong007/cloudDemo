<template>
  <div>
    <h1 v-if="state==='loading'">loading user...</h1>
    <div v-else>
      <h1>User:{{userInfo&&userInfo.user}}</h1>
      <h1>UserId:{{$route.params.userId}}</h1>
      <h2>etc....</h2>
    </div>
    <div>
      <router-link :to="{path:'/user/123'}" tag='li' active-class='active'><a>Go User123</a></router-link>
    </div>
    <router-link :to="{path:'/user/456'}" tag='li' active-class='active'><a>Go User456</a></router-link>
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
        this.userInfo = { user: "admain" };
        this.state = void 0;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>