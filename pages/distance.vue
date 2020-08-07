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
      <DistanceConvert />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import DistanceConvert from '../components/DistanceConvert'

export default {
  components: {
    Navbar,
    Logo,
    DistanceConvert
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
  width: 100%;
  padding-left: 2em;
  margin-left: 1em;
  margin-right: 1em;
}

.unitSelect {
  width: 100%;
}

.enterUnit {
  display: flex;
  margin-top: 20%;
}
</style>
