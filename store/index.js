import axios from 'axios'
const url = 'http://localhost:4001'

export const state = () => ({
  user: null,
  transaction: [],
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
}

export const actions = {
  async fetchUser({ commit }, email) {
    await axios
      .get(url + '/user/' + email)
      .then((res) => {
        commit('setUser', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
