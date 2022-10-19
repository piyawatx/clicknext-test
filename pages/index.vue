<template>
  <div>
    <NavBar />
    <div class="container pt-3">
      <h1>Balance : {{ balance.toLocaleString() }} THB</h1>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const url = 'http://localhost:4001'
export default {
  name: 'IndexPage',
  data() {
    return {
      token: null,
      balance: 0,
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
        .then((res) => {
          if (res.data == 'Welcome') {
            this.getUserByEmail()
          }
        })
        .catch((err) => {
          localStorage.token = ''
          this.$router.push('/login')
        })
    },
    getUserByEmail() {
      console.log(localStorage.email)
      axios
        .get(url + '/user/' + localStorage.email)
        .then((res) => {
          console.log(res.data)
          this.balance = res.data.balance
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
