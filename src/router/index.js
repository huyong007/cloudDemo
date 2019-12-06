import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home/index"),
      name: "home",
      meta: {
        title: "welcome to my home!"
      }
    },
    { path: "/about", component: () => import("@/views/About/index") },
    {
      path: "/user/:userId",
      name: "user",
      component: () => import("@/views/Users/index"),
      beforeEnter(to, from, next) {
        console.log(to, from, next(), "to,from,next");
        next();
      }
    },
    {
      path: "/settings",
      redirect: "/about",
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
    },
    {
      path: "*",
      component: () => import("@/views/PageNotFound/index"),
      meta: {
        title: "welcome to my 404!"
      }
    }
  ]
});
router.afterEach(to => {
  document.title = to.meta.title;
});

export default router;
