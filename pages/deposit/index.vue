<template>
  <div>
    <h1>Deposit</h1>
    <form @submit.prevent="Deposit">
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
    if (await this.$store.dispatch('checkLogin')) {
      await this.$store.dispatch('fetchUser', localStorage.email)
      this.user = this.$store.state.user
    }
  },
  data() {
    return {
      amount: '',
    }
  },
  methods: {
    Deposit() {
      let data = {
        email: this.$store.state.user.email,
        amount: this.amount,
      }
      axios
        .put(this.$store.state.url + '/deposit', data)
        .then((res) => {
          alert(
            'ฝากเงินจำนวน ' +
              this.amount +
              ' เรียบร้อย \n คงเหลือ ' +
              res.data.balance
          )
          this.amount = ''
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