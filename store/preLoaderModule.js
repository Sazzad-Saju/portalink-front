export const state = () => ({
  preloader: false,
});

export const mutations = {
  setPreloader(state, payload) {
    state.preloader = payload
  },
}

export  const actions= {

}


export const getters = {
  preloader: (state) => state.preloader,
}
