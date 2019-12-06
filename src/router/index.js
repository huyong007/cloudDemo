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
      name: "user",
      component: () => import("@/views/Users/index")
    },
    {
      path: "/settings",
      redirect:"/about",
      component: () => import("@/views/Settings/index"),
      children: [
        {
          path: "profile",
          component: () => import("@/views/Settings/components/profile")
        },
        {
          path: "email",
          component: () => import("@/views/Settings/components/email")
        }
      ]
    }
  ]
});

export default router;
