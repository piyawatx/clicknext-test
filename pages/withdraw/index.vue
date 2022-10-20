<template>
  <div>
    <h1>Withdraw</h1>
    <form @submit.prevent="Withdraw">
      <div class="mb-3 mt-3">
        <label>Amount</label>
        <input type="number" class="form-control" v-model="amount" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'navbar',
  async created() {
    await this.$store.dispatch('fetchUser', localStorage.email)
  },
  data() {
    return {
      amount: '',
    }
  },
  methods: {
    Withdraw() {
      let data = {
        email: this.$store.state.user.email,
        amount: this.amount,
      }
      console.log(data)
      console.log(this.amount)
      this.amount = ''
      axios
        .put(this.$store.state.url + '/withdraw', data)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style>
</style>