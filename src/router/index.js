import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: () => import("@/views/Home/index") },
    { path: "/about", component: () => import("@/views/About/index") },
    { 
      path: "/user/:userId", 
    name:'user',
    component: () => import("@/views/Users/index") }
  ]
});

export default router;
