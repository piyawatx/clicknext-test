<template>
  <div>
    <NavBar />
    <div class="container pt-3">
      <h1>Balance : {{ balance.toLocaleString() }} THB</h1>
      <div class="py-2">
        <button class="btn btn-primary btn-lg me-2">Deposit</button>
        <button class="btn btn-primary btn-lg me-2">Withdraw</button>
        <button class="btn btn-primary btn-lg me-2">Transfer</button>
        <button class="btn btn-primary btn-lg">Transaction</button>
      </div>
      
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
