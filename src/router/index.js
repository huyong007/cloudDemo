import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import PageHome from "../views/Home/index.vue";
import PageAbout from "../views/About/index.vue";

const router = new VueRouter({
  mode:'history',
  routes: [
    { path: "/", component: PageHome },
    { path: "/about", component: PageAbout },
    
  ]
});

export default router;
