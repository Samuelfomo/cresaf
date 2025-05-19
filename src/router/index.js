import { createRouter, createWebHistory } from 'vue-router';
import Home from "@public/home.vue";
import Values from "@public/values.vue";
import Products from "@public/products.vue";
import Solutions from "@public/solutions.vue";
import Image from "@public/components/image2.vue";
import SCroll from "@public/components/scroll.vue";
import Login from "@public/login.vue";
import Contact from "@public/contact.vue";
import Mobile from "@public/mobile.vue";
const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/values',
    name: 'values',
    component: Values
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: Solutions
  },
  {
    path: '/image',
    name: 'image',
    component: Image
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: SCroll
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/mobile',
    name: 'Mobile App',
    component: Mobile
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
