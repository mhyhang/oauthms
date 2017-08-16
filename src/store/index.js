import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import user from './module/user'
import menu from './module/menu'


Vue.use(Vuex);

export default new Vuex.Store({

  actions,
  getters,

  modules: {
    user, menu
  },
})

