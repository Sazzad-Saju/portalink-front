export const state = () => ({
  user: null,
});

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
}

export const actions = {
  nuxtServerInit ({ dispatch }, { req }) {
    dispatch('loadStore');
  },
}

export const getters = {
  getUser: (state) => state.user,
}
