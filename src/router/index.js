import { createWebHistory, createRouter } from "vue-router";
import aesMain from "@/views/aes/aes-main.vue";
import shaMain from "@/views/sha/sha-main.vue";

const routes = [
  {
    path: "/",
    redirect: "aes"
  },
  {
    path: "/aes",
    name: "aes",
    component: aesMain,
  },
  {
    path: "/sha",
    name: "sha",
    component: shaMain,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;