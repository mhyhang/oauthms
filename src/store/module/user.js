import api from '@/api'


const state = {
  user: 123
};
const getters = {};
const actions = {};
const mutations = {
  user: async state => {
    let result = await api.do('get', 'user');
    console.log(result);
    state.user = result;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
