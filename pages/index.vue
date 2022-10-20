<template>
  <div>
    <h1 v-if="user.balance">
      Balance : {{ user.balance.toLocaleString() }} THB
    </h1>
  </div>
</template>

<script>
import axios from 'axios'
const url = 'http://localhost:4001'
export default {
  name: 'IndexPage',
  layout: 'navbar',
  data() {
    return {
      token: null,
      balance: 0,
      user: {
        balance: 0,
      },
    }
  },
  created() {
    this.token = localStorage.token
    this.checkLogin()
  },
  methods: {
    checkLogin() {
      axios
        .post(url + '/welcome', {
          token: this.token,
        })
        .then(async (res) => {
          if (res.data == 'Welcome') {
            await this.$store.dispatch('fetchUser', localStorage.email)
            this.user = this.$store.state.user
            // console.log(this.user)
          }
        })
        .catch((err) => {
          localStorage.token = ''
          this.$router.push('/login')
        })
    },
  },
}
</script>
