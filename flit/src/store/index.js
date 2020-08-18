import Vue from "vue";
import Vuex from "vuex";

import * as getters from "./getters";
import mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mylist: [
      {
        id: 0,
        name: "San Francisco",
        time: new Date(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      {
        id: 1,
        name: "Seoul, South Korea",
        time: new Date(),
        timezone: "Asia/Seoul",
      },
      {
        id: 2,
        name: "Beijing, China",
        time: new Date(),
        timezone: "Asia/Shanghai",
      },
    ],
  },
  getters,
  mutations,
  actions,
});
