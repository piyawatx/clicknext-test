<template>
  <div class="container pt-3">
    <h1>Login</h1>
    <form @submit.prevent="Login">
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="pwd" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  created() {
    if (localStorage.token) {
      this.$router.push('/')
    }
  },
  methods: {
    Login() {
      if (this.email && this.password) {
        let email = this.email
        let password = this.password

        axios
          .post(this.$store.state.url + '/login', {
            email: email,
            password: password,
          })
          .then((res) => {
            console.log(res.data)
            localStorage.email = res.data.email
            localStorage.token = res.data.token
            localStorage.isLogin = true
            this.$router.push('/')
          })
          .catch((err) => {
            alert('ข้อมูลไม่ถูกต้อง')
          })
      } else {
        alert('กรุณากรอกข้อมูลให้ครบ')
      }
    },
  },
}
</script>

<style>
</style>