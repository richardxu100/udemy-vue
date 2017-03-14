import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions'; // create an object with each export
import * as getters from './getters';
import * as mutations from './mutations';
import counter from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters,
  mutations,
  actions,
  modules: {
    counter
  }
});
