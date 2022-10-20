<template>
  <div>
    <h1 v-if="user.balance">
      Balance : {{ user.balance.toLocaleString() }} THB
    </h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'navbar',
  data() {
    return {
      token: null,
      user: {
        balance: 0,
      },
    }
  },
  async created() {
    if (await this.$store.dispatch('checkLogin')) {
      await this.$store.dispatch('fetchUser', localStorage.email)
      this.user = this.$store.state.user
    }
  },
  methods: {},
}
</script>
