import * as types from "./mutation-types";

export const setMyList = ({ commit }, payload) => {
  commit(types.ADD_TIMEZONE, payload);
};
