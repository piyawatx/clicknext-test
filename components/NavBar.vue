<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          <img
            src="https://seeklogo.com/images/N/nuxt-logo-64E0472AA8-seeklogo.com.png"
            style="width: 40px"
            alt=""
          />
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="collapsibleNavbar"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/deposit"> Deposit </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/withdraw"> Withdraw </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/transfer"> Transfer </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/transaction">
                Transaction
              </NuxtLink>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <span class="nav-link text-white">{{ email }}</span>
            </li>
            <li class="nav-item">
              <span class="nav-link" role="button" @click="logout">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },
  created() {
    this.email = localStorage.email
  },
  methods: {
    logout() {
      localStorage.token = ''
      localStorage.email = ''
      this.$router.push('/login')
    },
  },
}
</script>

<style>
</style>