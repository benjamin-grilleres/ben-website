export const state = () => ({
  loadingPage: true
});

export const getters = {
  loadingPage(state) {
    return state.loadingPage
  }
};

export const mutations = {
  setLoadingPage(state, loading) {
    state.loadingPage = loading;
  }
};

export const actions = {

}
