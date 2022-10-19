<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <!-- <a class="navbar-brand" href="#">Logo</a> -->
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
              <NuxtLink class="nav-link" to=""> Deposit </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to=""> Withdraw </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to=""> Transfer </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to=""> Transaction </NuxtLink>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Register</a> -->
              <span class="nav-link text-white">{{ email }}</span>
            </li>
            <li class="nav-item">
              <!-- <button class="btn btn-danger" @click="logout">Logout</button> -->
              <span  class="nav-link" role="button" @click="logout">Logout</span>
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
      this.$router.push('/login')
      localStorage.token = ''
    },
  },
}
</script>

<style>
</style>