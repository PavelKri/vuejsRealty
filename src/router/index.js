import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "realEstate",
    component: () => import("@/views/RealEstate.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
