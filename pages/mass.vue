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
      <MassConvert />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import MassConvert from '../components/MassConvert'

export default {
  components: {
    Navbar,
    Logo,
    MassConvert
  }
}
</script>

<style />
