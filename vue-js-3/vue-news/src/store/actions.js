import {
  fetchAskList,
  fetchJobsList,
  fetchNewsList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
} from "../api/index.js";

export default {
  // promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //       context.commit("SET_NEWS", response.data);
  //       return response;
  //     })
  //     .catch((error) => console.log(error));
  // },
  // async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit("SET_NEWS", response.data);
    return response;
  },
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    commit("SET_ASK", response.data);
    return response;
  },
  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit("SET_JOBS", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  // #2
  FETCH_LIST({ commit }, pageName) {
    // #3
    return fetchList(pageName)
      .then((response) => {
        // #4
        console.log(4);
        commit("SET_LIST", response.data);
        return response;
      })
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, username) {
    return fetchUserInfo(username)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommentItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((error) => console.log(error));
  },
};
