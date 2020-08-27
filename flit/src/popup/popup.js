import Vue from "vue";
import App from "./App";
import store from "../store";
import Home from "./components/Home";
import Add from "./components/Add";
import VueRouter from "vue-router";

global.browser = require("webextension-polyfill");
Vue.prototype.$browser = global.browser;

const routes = [
  { path: "/", component: Home },
  { path: "/add", component: Add },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

Vue.use(VueRouter);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
