export const state = () => ({
  loadingPage: true,
  fullPageLoaded: false
});

export const getters = {
  loadingPage(state) {
    return state.loadingPage
  },
  fullPageLoaded(state) {
    return state.fullPageLoaded
  }
};

export const mutations = {
  setLoadingPage(state, loading) {
    state.loadingPage = loading;
  },
  setFullPageLoaded(state, loading) {
    state.fullPageLoaded = loading;
  }
};

export const actions = {

}
