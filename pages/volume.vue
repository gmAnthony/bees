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
      <VolumeConvert />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import VolumeConvert from '../components/VolumeConvert'

export default {
  components: {
    Navbar,
    Logo,
    VolumeConvert
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
