<template>
  <NavBar />
</template>

<script>
import axios from 'axios'
const url = 'http://localhost:4001'
export default {
  name: 'IndexPage',
  data() {
    return {
      token: null,
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
          console.log(res)
        })
        .catch((err) => {
          localStorage.token = ''
          this.$router.push('/login')
        })
    },
  },
}
</script>
