<template>
  <div class="grid-container">
    <div class="logo">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>
    <div class="nav-bar">
      <Navbar />
    </div>
    <div class="content">
      <TimeConvert />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import TimeConvert from '../components/TimeConvert'

export default {
  components: {
    Navbar,
    Logo,
    TimeConvert
  }
}
</script>

<style>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.unitEnter {
  width: 50%;
}

.unitSelect {
  width: 20%;
}

.enterUnit {
  display: flex;
  margin-top: 20%;
}
</style>
