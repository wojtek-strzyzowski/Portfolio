import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import CaseStudy from "@/views/CaseStudy.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/case/:id",
    name: "CaseStudy",
    component: CaseStudy,
    props: true
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});