import * as types from "./mutation-types";

export default {
  [types.ADD_TIMEZONE](state, payload) {
    state.mylist = payload;
  },
};
