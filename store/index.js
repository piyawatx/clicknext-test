import axios from 'axios'

export const state = () => ({
  user: null,
  transaction: [],
  url: 'http://localhost:4001',
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
}

export const actions = {
  async fetchUser({ commit, state }, email) {
    await axios
      .get(state.url + '/user/' + email)
      .then((res) => {
        commit('setUser', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  async checkLogin({ state, commit }) {
    if (localStorage.token) {
      return await axios
        .post(state.url + '/welcome', {
          token: localStorage.token,
        })
        .then((res) => {
          if (res.data == 'Welcome') {
            return true
            // commit('setIsLogin', true)
          } else {
            this.$router.push('/login')
            return false
          }
        })
    } else {
      this.$router.push('/login')
      return false
    }
  },
}
