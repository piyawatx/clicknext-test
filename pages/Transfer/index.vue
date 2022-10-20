<template>
  <div>
    <h1>Transfer</h1>
    <form @submit.prevent="Transfer">
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">Receiver Email:</label>
        <input type="email" class="form-control" v-model="receiver" />
      </div>
      <div class="mb-3">
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
  data() {
    return {
      amount: '',
      receiver: '',
    }
  },
  methods: {
    Transfer() {
      let data = {
        user: this.$store.state.user.email,
        receiver: this.receiver,
        amount: this.amount,
      }
      // console.log(data)
      axios
        .post(this.$store.state.url + '/transfer', data)
        .then((res) => {
          console.log(res.data)
          alert(
            'โอนเงิน ' +
              this.amount +
              ' ไปยัง ' +
              this.receiver +
              ' เรียบร้อย \n คงเหลือ '+res.data.userRemain
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