<template>
  <div>
    <h1>Transaction</h1>
    <div>
      <table class="table table-hover" v-if="transaction.length > 0">
        <thead>
          <tr>
            <th>Datetime</th>
            <th>User</th>
            <th>Remain</th>
            <th>Action</th>
            <th>From</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="t in transaction" :key="t.id">
            <td>{{ t.datetime }}</td>
            <td>{{ t.user }}</td>
            <td>{{ t.remain.toLocaleString() }}</td>
            <td>{{ t.action }}</td>
            <td>{{ t.from }}</td>
            <td>{{ t.amount.toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'navbar',
  data() {
    return {
      transaction: [],
      email: '',
    }
  },
  async created() {
    await this.$store.dispatch('checkLogin')
    this.getTransaction()
  },
  methods: {
    async getTransaction() {
      this.email = localStorage.email
      await axios
        .get(this.$store.state.url + '/transaction/' + this.email)
        .then((res) => {
          this.transaction = res.data
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